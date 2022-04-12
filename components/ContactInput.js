import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal, Text } from "react-native"; //TouchablOpacity allows you to tap on a thing

const ContactInput = (props) => {
  const [enteredContactItemFirstName, setContactFirstName] = useState("");
  const [enteredContactItemLastName, setContactLastName] = useState("");
  const [enteredContactItemEmail, setContactNumEmail] = useState("");

  // name                          whats being passed    =>     what the function does
  const ContactInputFirstNameHandler = (value) => {
    setContactFirstName(value);
  };
  const ContactInputLastNameHandler = (value) => {
    setContactLastName(value);
  };

  const ContactInputNumEmailHandler = (value) => {
    setContactNumEmail(value);
  };

  const addItemHandler = () => {
    var info =
      enteredContactItemFirstName +
      " " +
      enteredContactItemLastName +
      "  -  " +
      enteredContactItemEmail;

    props.onAddItem(info);
    setContactFirstName("");
    setContactLastName("");
    setContactNumEmail("");
  };

  return (
    <Modal visible={props.visible} animationType="fade" style={{}}>
      <View visible={props.visible} style={styles.inputContainer}>
        <Text style={styles.heading}>Final Project</Text>
        <Text style={styles.label}>Darrell Bryan</Text>
        <Text style={styles.label}>Julian Vines</Text>
        <Text style={styles.label}>Leah Tomaszewski</Text>
        <Text style={styles.label}>Dylan Gendreau</Text>
        <Text style={styles.addContact}>Add Contact</Text>

        <TextInput
          placeholder="Contact First Name"
          style={styles.input}
          onChangeText={ContactInputFirstNameHandler}
          value={enteredContactItemFirstName}
        />
        <TextInput
          placeholder="Contact Last Name"
          style={styles.input}
          onChangeText={ContactInputLastNameHandler}
          value={enteredContactItemLastName}
        />
        <TextInput
          placeholder="Phone Number/Email"
          style={styles.input}
          onChangeText={ContactInputNumEmailHandler}
          value={enteredContactItemEmail}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="#CC7351" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" color="#5AA469" onPress={addItemHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3DEDC",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#FFEFEF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
  label: {
    fontSize: 30,
  },
  addContact: {
    fontSize: 30,
    paddingTop: 75,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 50,
    marginBottom: 20,
    marginTop: -150,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

// Do this at end on everything
export default ContactInput;
