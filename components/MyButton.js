import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MyButton({changeColor}) {

    return (
        <View>
            <TouchableOpacity
                onPress={() => changeColor()}
                style={styles.button}>
                <Text style={styles.buttonTxt}>Change the color</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'grey',
        padding: 9,
        margin: 5
    },
    buttonTxt: {
        fontSize: 35,
        textAlign: 'center'
    }
});