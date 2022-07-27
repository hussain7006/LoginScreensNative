import React from "react";
import { Button, ImageBackground, StatusBar, StyleSheet, Text, TextInput, Touchable, View } from "react-native";
import topImage from '../images/login-hero.jpg';

function Login1() {
    return <>
        <StatusBar backgroundColor="blue" />
        <View style={styles.top}>
            <ImageBackground source={topImage} style={styles.image}>
                {/* <Text style={styles.welcomeText} >Welcome</Text> */}
                {/* <Text style={styles.loginText} >Login</Text> */}
            </ImageBackground>
        </View>
        <View style={styles.middle}>
            <View style={styles.inpDiv}>
                <TextInput style={styles.inp} placeholder="Email"></TextInput>
            </View>
            <View style={styles.inpDiv}>
                <TextInput style={styles.inp} placeholder="Password"></TextInput>
            </View>
            <View style={styles.forgotpassDiv}>
                <Text style={styles.forgotpass}>Forgot Password</Text>
            </View>
            <View style={styles.submitDiv}>
                <Button title="Submit" style={styles.submit} ></Button>
            </View>
        </View>
        <View style={styles.bottom}>
            <View style={styles.seperator}>
                <View style={{ borderBottomWidth: 1, height: 7, flex: 1, }}></View>
                <Text style={{ paddingHorizontal: 5, fontSize: 10, height: 16 }}>or</Text>
                <View style={{ borderBottomWidth: 1, height: 7, flex: 1, }}></View>
            </View>
            <View style={styles.signUpButtonDiv}>
                <Button title="SignUp" style={styles.signUPButton} ></Button>
            </View>
        </View>
    </>


}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    top: {
        // backgroundColor: 'blue',
        // width: '100%',
        flex: 1,
        // borderBottomRightRadius: 285,
        // paddingLeft: 10,

    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    welcomeText: {
        color: 'blue',
        fontSize: 50,
        fontWeight: 'bold',
    },
    loginText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    middle: {
        // backgroundColor: 'blue',
        flex: 0.7,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    inpDiv: {
        justifyContent: 'center',
    },
    inp: {
        backgroundColor: 'white',
        color: 'blue',
        fontSize: 20,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 9,
        paddingLeft: 15,

    },
    forgotpassDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5,
    },
    forgotpass: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue',
    },
    submitDiv: {
        borderColor: 'white',
        borderWidth: 1

    },
    submit: {
    },

    bottom: {
        // backgroundColor: 'green',
        flex: 0.3,
        marginLeft: 9,
        marginRight: 9,
        marginTop: 9,
    },
    seperator: {
        flex: 0.2,
        flexDirection: 'row',
        // borderWidth:2
    },
    signUpButtonDiv: {
        flex: 0.7,
        justifyContent: 'center',
    },
    signUPButton: {

    },

});

export default Login1;