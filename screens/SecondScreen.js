import React, {useState} from 'react';
import {View, Button, TextInput, Alert } from 'react-native';
import * as Speech from 'expo-speech';

import { styles } from '../styles/styles';

const SecondScreen = () => {

    const[ThingtoSay, setThingtoSay] = useState('');

    const ThingtoSayHandler = (value) => {
        setThingtoSay(value);
    }


    const showAlert  = async () =>
    await Alert.alert(
        "",
        "Clear Text?", [
          {
            text: "No",
            onPress: () => {}
          },
          {
            text: "Yes",
            onPress: () => {setThingtoSay('');}
          },
    
        ],
        {cancelable: true} // Allows to be tapped off of
      );//END showAlert

    const speak = () => {
        Speech.isSpeakingAsync().then(function(result){

            if(!result)
            {
                Speech.speak(ThingtoSay)
            }
        });
    }




// How to do promises

    // return new Promise((resolve, reject) => {
    //     got(srcAddr, { responseType: "json" })
    //       .then((response) => {
    //         let answer = response.body;
    //         resolve(answer);
    //       })
    //       .catch((err) => {
    //         console.log(`Error ==> ${err}`);
    //         reject(err);
    //       });
    //   });

    return (
        <View style={styles.screen}>
            <TextInput placeholder="Write something to say..." style={styles.label2} onChangeText={ThingtoSayHandler} value={ThingtoSay} multiline={true} numberOfLines={13}/>
            <Button title="Let Yourself Be Heard" onPress={speak} />



                   

            <View style={styles.form}></View>

            <Button title="Clear" onPress={ showAlert} />

        </View>
    );
}

export default SecondScreen;
