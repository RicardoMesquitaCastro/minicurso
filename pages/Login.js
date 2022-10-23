import React from 'react';
import { StyleSheet,Text,View,TextInput,TouchableOpacity, Image } from 'react-native';  
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
import Styles from './Styles';

export default function App() {
 
    return(
     <ScrollView>
    <View style={styles.container}>
      <Image style={Styles.imgIf} source={require("../src/ifg.png")} />
        <Text style={Styles.loginText}>Login</Text>
        
        <TextInput
          placeholder='Digite seu Email'
          placeholderTextColor='#fafafa'
          style={Styles.input}
          autoCorrect={true}
          autoCapitalize={false}
          autoCompleteType='email'
          keyboardType='email-address'
          textContentType='emailAddress'
          
        />
        <TextInput
          placeholder='Digite sua Senha'
          placeholderTextColor='#fafafa'
          style={Styles.input}
          secureTextEntry={true}
          textContentType='password'
        />
        <TouchableOpacity>
          <Text style={Styles.fpText}>Esqueci a senha!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.loginButton}>
          <Text style={Styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
        <View style={Styles.loginWithBar}>
          <TouchableOpacity style={Styles.iconButton}>
          <Icon name='apple'
           type='font-awesome' 
           size={30} color='#fafafa' />
            </TouchableOpacity>
          <TouchableOpacity style={Styles.iconButton}>
          <Icon
              name='facebook-square'
              type='font-awesome'
              size={30}
              color='#fafafa'
            />
            </TouchableOpacity>
          <TouchableOpacity style={Styles.iconButton}>
          <Icon name='google' 
          type='font-awesome' 
          size={30} color='#fafafa' />
            </TouchableOpacity>
        </View>
        <View style={Styles.signUpTextView}>
          <Text style={Styles.signUpText}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={[Styles.signUpText, { color: 'black' }]}>
              {'Cadastre-se'}
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 20,
  }
});
