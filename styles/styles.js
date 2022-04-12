import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: "#D3DEDC",
  },
  form: {
    margin: 30,
    marginTop: 60,
  },
  playBackOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  options: {
    padding: "10%",
    width: 1,
    height: 1,
    borderWidth: 1,
    color: "#E9DAC1",
  },
  newOptions: {
    width: 93,
    height: 93,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: "top",
  },
  buttonContainer: {
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    width: "70%",
    padding: "50%",
    color: "#E9DAC1",
  },
  flatlist: {},
  label: {
    fontSize: 40,
    marginBottom: 30,
    textAlign: "center",
    marginTop: -10,
  },
  label2: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    height: 500,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#FFEFEF",
    alignItems: "center",
    fontSize: 30,
    opacity: 0.7,
  },
  image: {
    width: 311,
    height: 300,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#FFEFEF",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1.7,
    textAlign: "center",
  },
  tts: {
    marginTop: 25,
    alignSelf: "center",
    width: "75%",
  },
});
