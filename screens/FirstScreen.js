import React, { useState } from 'react';

import { View, Text, Platform, FlatList, Alert, TouchableOpacity, StyleSheet, Button } from 'react-native';
import * as MailComposer from 'expo-mail-composer'
import * as ImagePicker from 'expo-image-picker';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { db } from "../firebase";



import * as Clipboard from 'expo-clipboard'



import ContactInput from '../components/ContactInput';
import CustomHeaderButton from '../components/CustomHeaderButton';


import { styles } from '../styles/styles';
import { createWorklet } from 'react-native-reanimated';

const cancelDialog = {
  text: 'Close',
  style: 'cancel'
}

const promptForEmailResponse = (input) => {
  Alert.alert(
    'Email Send Confirmation',
    input,
    //array of buttons
    [cancelDialog],
    { cancelable: true } //tap outside the screen - false: wont close, true: will close
  )
}


const ContactListItem = props => {


  const showAlert = async (data) =>
    await Alert.alert(
      "Add a file",
      "Do you want to attach a file?", [
      {
        text: "No",
        onPress: () => { sendMessageWithEmail(data) }
      },
      {
        text: "Yes",
        onPress: () => { sendEmailWithAttachment(data) }
      },
      {
        text: "Take Photo",
        onPress: () => { sendEmailWithCameraAttachment(data) }
      },
    ],
      { cancelable: true } // Allows to be tapped off of
    );//END showAlert

  // Wont lock up, will have to wait for some stuff

  const sendEmailWithAttachment = async (data) => {
    //get the image to attach.
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    let arr = data.split('-');

    const isAvailable = await MailComposer.isAvailableAsync();
    if (isAvailable) {
      var options = {
        recipients: [arr[1]],
        subject: 'Mobile Project',
        body: 'Dear ' + arr[0] + 'I hope this receives a 100% grade',
        attachments: [result.uri]
      };

      MailComposer.composeAsync(options).then((result) => { promptForEmailResponse(result.status); })

    } else {
      console.log("Email is not available on this device");
    }
  }//END sendEmailWithAttachment

  const sendEmailWithCameraAttachment = async (data) => {
    //get the image to attach.
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1.0
    });

    let arr = data.split('-');

    const isAvailable = await MailComposer.isAvailableAsync();
    if (isAvailable) {
      var options = {
        recipients: [arr[1]],
        subject: 'Mobile Project',
        body: 'Dear ' + arr[0] + 'I hope this receives a 100% grade',
        attachments: [result.uri]
      };

      MailComposer.composeAsync(options).then((result) => { promptForEmailResponse(result.status); })

    } else {
      console.log("Email is not available on this device");
    }
  }//END sendEmailWithAttachment

  const sendMessageWithEmail = async (data) => {

    let arr = data.split('-');

    const isAvailable = await MailComposer.isAvailableAsync();
    if (isAvailable) {
      var options = {
        recipients: [arr[1]],
        subject: 'MAIL COMPOSER',
        body: 'Dear ' + arr[0] + 'I hope this receives a 100% grade',
      };

      MailComposer.composeAsync(options).then((result) => { promptForEmailResponse(result.status); })

    } else {
      console.log("Email is not available on this device");
    }
  }//END sendMessageWithEmail

  const copyToClipboard = (data) => {
    //console.log(data);
    if (data != null) {

      Clipboard.setString(data);

    }

  }

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => showAlert(props.item)} onLongPress={() => copyToClipboard(props.item)}>
        <View style={styles.listItem}>

          <Text> {props.item} </Text>

        </View>

      </TouchableOpacity>

    </View>

  )
}


const FirstScreen = (props) => {

  // Variables
  // getter and setter for the state
  [message, setMessage] = useState();
  const [contactList, setcontactList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);



  const addContactItemHandler = (contactItem) => {
    setcontactList(contactList => [...contactList, { key: Math.random().toString(), value: contactItem }]);
    setIsAddMode(false);
  }

  // Filter will run through array and return only the true elements
  const removecontactItemHandler = itemId => {
    setcontactList(
      contactList => {
        return contactList.filter((item) => item.key !== itemId);
      }
    );
  }

  onChangeHandler = (value) => {
    setMessage(value);
  }

  // Navigation + 
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add new Contact"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => setIsAddMode(true)}
          />
        </HeaderButtons>
      ),
    });
    // Get users from DB
    // Grab a specific property with "JSON.stringify(doc.data())" and use .first, .last, or .email like below
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data().first + ' ' + doc.data().last + ' - ' + doc.data().email)}`);

        let userData = doc.data().first + ' ' + doc.data().last + ' - ' + doc.data().email;


        addContactItemHandler(userData);


      });
    });
  }, []);


  return (
    <View style={styles.screen}>
      <Text style={{alignSelf: 'center' , fontSize: 25}}>Ye Old Snapchat</Text>
      <View style={styles.tts}>
        <Button
          title="Text-to-Speech"
          color="#92A9BD"
          onPress={() => props.navigation.navigate("SecondScreen")}
        />
      </View>

      <View style={styles.form}>
        
        <Text style={styles.label}>Contact List</Text>

        <FlatList
          style={styles.flatlist}
          data={contactList}
          renderItem={(itemData) => (
            <ContactListItem
              id={itemData.item.key} // To access ItemData you need to acess the item which is the contactList
              onDelete={removecontactItemHandler}
              item={itemData.item.value}
            />
          )}
        />

        <ContactInput
          visible={isAddMode}
          onCancel={() => setIsAddMode(false)}
          onAddItem={addContactItemHandler}
        />
      </View>
    </View> // MAIN VIEW
  );
};

export default FirstScreen;



