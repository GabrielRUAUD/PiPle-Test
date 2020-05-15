import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyButton from './components/MyButton'

export default function App() {

    const [color, setcolor] = useState('#000000')

    const changeColor = () => {
        setcolor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
    }

    return (
        <View style={styles(color).container}>
            
            <Text style={styles(color).text}>
                Color displayed : {color}
            </Text>

            <MyButton changeColor={changeColor} />

        </View>
    );
}

const styles = (color) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      color: color,
      fontSize: 35
    }
});