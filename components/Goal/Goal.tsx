import * as React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import NewGoal from "./NewGoal";
import { StatusBar } from "expo-status-bar";

interface IGoalProps {}
interface IGoal {
  id: number;
  title: string;
}

const Goal: React.FunctionComponent<IGoalProps> = (props) => {
  const [goals, setGoals] = React.useState<IGoal[]>([]);
  const [showNewModal, setShowNewModal] = React.useState<boolean>(false);

  const addNewGoal = (newGoal: string) => {
    if (newGoal.length === 0) {
      return;
    }
    const newGoalObj: IGoal = { title: newGoal, id: Math.random() };
    setGoals([...goals, newGoalObj]);
  };

  const deleteGoal = (goal: IGoal) => {
    setGoals(goals.filter((g) => g.id !== goal.id));
  };

  const closeModal = () => {
    setShowNewModal(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.reactLogo}>
        <Image source={require("../../assets/images/react-logo.png")} />
        <Button
          title="Add new goal"
          color="#3e3e3e"
          onPress={() => setShowNewModal(true)}
        />
        <NewGoal
          addNewGoal={addNewGoal}
          showNewModal={showNewModal}
          closeModal={closeModal}
        />
        <Text style={styles.label}> My goals</Text>
        <View style={styles.stepContainer}>
          <ScrollView style={{ maxHeight: 300 }}>
            {goals.map((goal) => (
              <Pressable
                onPress={() => deleteGoal(goal)}
                android_ripple={{ color: "red" }}
                style={({ pressed }) => pressed && { opacity: 0.5 }}
              >
                <Text style={styles.goalItem} key={goal.id}>
                  {goal.title}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Goal;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
  inputContainer: {
    backgroundColor: "white",
    borderBlockColor: "black",
    width: "60%",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
  },
  label: {
    width: "100%",
    color: "white",
  },
  stepContainer: {
    width: "100%",
  },
  goalItem: {
    borderRadius: 8,
    backgroundColor: "#6a59b8",
    padding: 8,
    marginVertical: 4,
    color: "white",
  },
  reactLogo: {
    display: "flex",
    padding: 30,

    height: "100%",
    color: "#fff",
    gap: 8,
    alignItems: "center",
    fontSize: 40,
    backgroundColor: "#311666",
  },
});
