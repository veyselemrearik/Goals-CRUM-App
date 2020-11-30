import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMod, setIsAddMod] = useState(false);
  console.log("Re-Renderet :");
  console.log(courseGoals);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMod(false);
  };

  const removeGoalHandler = goalId => {
    console.log('silinen' + goalId);
    console.log(courseGoals);
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  const cancelGoalHandler = () => {
    setIsAddMod(false);
  };
  return (
    <View style={styles.screen} >
      <Button title='add new goal' onPress={() => setIsAddMod(true)} />
      <GoalInput visible={isAddMod} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
      <FlatList
        keytExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
        }
      />

    </View>

  );

}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
