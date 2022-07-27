import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import avatarImage from '../images/avatarImage.png';
export default function Login3() {
  return (
    <>
      <View style={styles.mainView}>
        <StatusBar backgroundColor="brown" />
        <View style={styles.top}>
          <Avatar rounded size={150} source={avatarImage} />
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.inpDiv}>
            <TextInput placeholder="Username" style={styles.inp}></TextInput>
          </View>
          <View style={styles.inpDiv}>
            <TextInput placeholder="Password" style={styles.inp}></TextInput>
          </View>

          <View style={styles.forgotPasswordDiv}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>

          <View style={styles.submitDiv}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert('Welcome')}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  top: {
    flex: 0.6,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  inpDiv: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
    marginTop: 15,
    margin: 5,
  },
  inp: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRights: 20,
  },

  forgotPasswordDiv: {
    margin: 5,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 15,
    fontWeight: '900',
    color: 'gray',
  },
  submitDiv: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
    marginTop: 15,
    margin: 5,
    padding: 10,
    backgroundColor: 'orange',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});
