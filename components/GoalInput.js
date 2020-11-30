import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalIntputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoalHanler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View
                style={styles.inputCountainer}>
                <TextInput
                    placeholder="Course Goals"
                    style={styles.input}
                    onChangeText={goalIntputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" on onPress={addGoalHanler} />
                    </View>
                </View>
            </View>
        </Modal>
    );

};

const styles = StyleSheet.create({

    inputCountainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        width: '80%', borderColor: 'black', borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }



});

export default GoalInput; 
