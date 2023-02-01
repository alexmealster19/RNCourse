import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState, useEffect} from "react";
import * as SQLite from 'expo-sqlite';

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/GTSlogo.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='What did you say?'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel"
                            onPress={props.onCancel}
                            color='#f31282' />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Add curse'
                            onPress={addGoalHandler}
                            color='#000000'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#64be7e'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '70%',
        height: '4%',
        textAlign: 'center',
        color: '#120438',
        borderRadius: 6,

    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 12
    },
    button: {
        width: '30%',
        marginHorizontal: 2
    },
    image: {
        height: 100,
        margin: 20,
        width: 100
    }
})

