import React from 'react';
import {
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import purple from '../images/purpleGrad.jpg';
import topImage from '../images/login-hero.jpg';
export default function Login2() {
  return (
    <>
      <View style={styles.mainDiv}>
        <StatusBar backgroundColor="purple" />
        <View style={styles.top}>
          {/* <ImageBackground  imageStyle={{ borderBottomRadius: 6}} source={purple} style={styles.grad}>
                </ImageBackground> */}
          <Text style={styles.welcome}>Welcom Back</Text>
          <Text style={styles.text2}>Sign in to continue</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.inputDiv}>
            <TextInput placeholder="E-mail" style={styles.inp}></TextInput>
            <TextInput placeholder="Password" style={styles.inp}></TextInput>
          </View>
          <View style={styles.buttonDiv}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert('Welcome')}>
              <Text style={{color: 'white'}}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.register}>
              <Text style={styles.newuser}>New user? </Text>
              <TouchableOpacity
                onPress={() => alert('Please wait...')}
                style={styles.signupLink}>
                <Text style={styles.signupText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    // flexDirection: 'row',
  },
  top: {
    flex: 0.4,
    // borderWidth: 1,
    backgroundColor: 'purple',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text2: {
    color: 'yellow',
  },
  grad: {
    height: '100%',
  },
  bottom: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'red',
  },
  inputDiv: {
    // borderWidth: 2,
    marginTop: 20,
    margin: 15,
  },
  inp: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 10,
    paddingLeft: 15,
    color: 'black',
  },
  buttonDiv: {
    margin: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    // width: 150,
    borderColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    height: 45,
  },
  register: {
    flexDirection: 'row',
    marginTop: 25,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newuser: {
    color: 'black',
  },
  signupLink: {},
  signupText: {
    color: 'blue',
  },
});
