import React, {useState} from 'react';
import {View, Button, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
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



    const stopSpeaking = () => {
        Speech.isSpeakingAsync().then(function(result){

            if(result)
            {
                Speech.stop();
            }
        });
    }


    const restartSpeaking = () => {
        Speech.isSpeakingAsync().then(function(result){

            if(result)
            {
                Speech.stop();
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
          <TextInput
            placeholder="Write something to say..."
            style={styles.label2}
            onChangeText={ThingtoSayHandler}
            value={ThingtoSay}
            multiline={true}
            numberOfLines={13}
          />
          <View style={{ padding: 20 }}></View>
    
          <View style={styles.playBackOptions}>
            <TouchableOpacity style={{}} color="white" onPress={speak}>
              <Image
                style={styles.newOptions}
                source={require("../assets/play_cropped_transparent.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{}} color="white" onPress={stopSpeaking}>
              <Image
                style={styles.newOptions}
                source={require("../assets/stop_cropped_transparent.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{}} color="white" onPress={restartSpeaking}>
              <Image
                style={styles.newOptions}
                source={require("../assets/repeat_cropped_transparent.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}></View>
          <View
            style={{
              width: 200,
              paddingTop: 15,
              marginLeft: "24%",
              //paddingTop: 15,
              justifyContent: "center",
              //alignItems: "center",
            }}
          >
            <Button title="Clear" color="#FFBCD1" onPress={showAlert} />
          </View>
        </View>
      );
    };

export default SecondScreen;
