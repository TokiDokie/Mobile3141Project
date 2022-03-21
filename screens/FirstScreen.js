import React, { useState } from 'react';

import {View, Text, Platform, FlatList, Alert, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer'
import * as ImagePicker from 'expo-image-picker';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ContactInput from '../components/ContactInput';
import CustomHeaderButton from '../components/CustomHeaderButton';

import * as Battery from 'expo-battery';

import { styles } from '../styles/styles';
import { State } from 'react-native-gesture-handler';
// Email stuff

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
    {cancelable: true} //tap outside the screen - false: wont close, true: will close
  )
}

const ContactListItem = props => {


const showAlert  = async (data) =>
 await Alert.alert(
    "Add a file",
    "Do you want to attach a file?", [
       {
        text: "No",
        onPress: () => {sendMessageWithEmail(data)}
      },
      {
        text: "Yes",
        onPress: () => {sendEmailWithAttachment(data)}
      },
      {
        text: "Take Photo",
        onPress: () => {sendEmailWithCameraAttachment(data)}
      },
    ],
    {cancelable: true} // Allows to be tapped off of
  );//END showAlert

// Wont lock up, will have to wait for some stuff

  const sendEmailWithAttachment = async(data) => {
    //get the image to attach.
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    let arr = data.split('-');

    const isAvailable = await MailComposer.isAvailableAsync();
    if(isAvailable) {
      var options = {
        recipients: [arr[1]],
        subject: 'Mobile Project',
        body: 'Dear ' + arr[0] + 'I hope this receives a 100% grade',
        attachments:  [result.uri]
      };
  
      MailComposer.composeAsync(options).then((result) => { promptForEmailResponse(result.status); })
      
    } else {
      console.log("Email is not available on this device");
    }
  }//END sendEmailWithAttachment

  const sendEmailWithCameraAttachment = async(data) => {
    //get the image to attach.
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1.0
  });

    let arr = data.split('-');

    const isAvailable = await MailComposer.isAvailableAsync();
    if(isAvailable) {
      var options = {
        recipients: [arr[1]],
        subject: 'Mobile Project',
        body: 'Dear ' + arr[0] + 'I hope this receives a 100% grade',
        attachments:  [result.uri]
      };
  
      MailComposer.composeAsync(options).then((result) => { promptForEmailResponse(result.status); })
      
    } else {
      console.log("Email is not available on this device");
    }
  }//END sendEmailWithAttachment

const sendMessageWithEmail = async (data) => {

  let arr = data.split('-');

  const isAvailable = await MailComposer.isAvailableAsync();
  if(isAvailable) {
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

  return(
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => showAlert(props.item)}>
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
    setcontactList(contactList => [...contactList,{key: Math.random().toString(), value: contactItem } ]);
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
  }, []);


// BATTERY
//<ProcessBar bgcolor="orange" progress='40'  height={30} />




// Progress

const Progressbar = ({bgcolor,progress,height}) => {
     
    
        
  return (
    <View>
      <div style={styles.Parentdiv}>
        <div style={styles.Childdiv}>
          
          <span style={styles.progresstext}>{`${progress}%`} </span>
          
        </div>
      </div>
      </View>
  )
}









    return (
        <View style={styles.screen}>

        <Progressbar bgcolor="orange" progress='30'  height={30} />

        

          <View style={styles.form}>
          <Text style={styles.label}>Ye'old Snapchat</Text>
          


            
          <FlatList style={styles.flatlist}
                  data = {contactList}
                  renderItem={
                    itemData => (
                      <ContactListItem 
                      id={itemData.item.key}    // To access ItemData you need to acess the item which is the contactList  
                      onDelete={ removecontactItemHandler}
                      item={itemData.item.value}
                      
                      
                      />
                    )
                    
                  }
                />


          <ContactInput  visible={isAddMode} onCancel={() => setIsAddMode(false)} onAddItem={addContactItemHandler} />

          </View>
        </View> // MAIN VIEW

        
    );
}

export default FirstScreen;