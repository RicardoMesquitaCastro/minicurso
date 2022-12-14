import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,      //nao ta servindo pra nada
      paddingHorizontal: 20,
    },
    welcomeText: {
      fontSize: 30,
      fontWeight: '900',   //TIRAR DEPOIS
      color: '#ff7200',
      alignSelf: 'center',
    },
    loginText: {
      color: '#ff7200',
      fontSize: 28,
      fontWeight: 'bold',  
      marginTop: 30,
      marginBottom: 10,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#ff7200',
      borderRadius: 6,
      marginTop: 10,
      paddingHorizontal: 10,
      fontSize: 16,
      color: '#fafafa',
    },
    fpText: {
      alignSelf: 'flex-end',
      color: '#808e9b',
      fontSize: 18,
      fontWeight: '600',
      marginTop: 10,
    },
    loginButton: {
      backgroundColor: '#ff7200',
      paddingVertical: 15,
      borderRadius: 6,
      marginTop: 20,
    },
    loginButtonText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#fafafa',
      alignSelf: 'center',
    },
    loginWithBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 90,
    },
    iconButton: {
      backgroundColor: '#ff7200',
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 100,
    },
    signUpTextView: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signUpText: {
      color: '#808e9b',
      fontSize: 20,
      fontWeight: '500',
    },
    itemTab:{ 
   
      backgroundColor:'#ff7200',
      alignItems:'center',
      justifyContent:'center'      //nao ta servindo pra nada
    },
    imgIf:{
      height:200,
      width:200,
      alignSelf:'center',
      marginTop: -40
    }
  });