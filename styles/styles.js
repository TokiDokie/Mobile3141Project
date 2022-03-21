import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screen:{
        padding: 20, 
        flex: 1,
        backgroundColor:'#b747f5'
    },
    form: {
        margin: 30,
        marginTop: 60,
        
    },
    label: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center'
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2,
        textAlignVertical: 'top'
    },
    buttonContainer: {
      paddingVertical: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      position: 'absolute',
      left: 0, right: 0, bottom: 0 
    },
    button: {
        width: '70%',
        padding: '50%',
    },
    flatlist: {

    },
    label: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center'
    },
    image: {
        width: 311,
        height: 300
    },
    listItem:{
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1.5,
        textAlign: 'center',
    },
    Parentdiv: {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
    },
      Childdiv: {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      },
      
      progresstext: {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }

});