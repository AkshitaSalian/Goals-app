import * as React from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

interface INewGoalProps {
  addNewGoal: (newGoal: string) => void;
  showNewModal: boolean;
  closeModal: () => void;
}

const NewGoal: React.FunctionComponent<INewGoalProps> = ({
  addNewGoal,
  showNewModal,
  closeModal,
}) => {
  const [newGoal, setNewGoal] = React.useState<string>("");

  const addNewGoalHandler = () => {
    addNewGoal(newGoal);
    closeModal();
    setNewGoal("");
  };

  return (
    <Modal visible={showNewModal} animationType="slide">
      <View style={styles.titleContainer}>
        <TextInput
          placeholder={`new goal`}
          value={newGoal}
          style={styles.inputContainer}
          onChangeText={(val) => setNewGoal(val)}
          maxLength={100}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} />
          </View>
          <View style={styles.button}>
            <Button title="Add new goal" onPress={addNewGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewGoal;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 50,
    gap: 16,
    flex: 1,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    width: "100%",
  },
  button: { flex: 1 },
  inputContainer: {
    backgroundColor: "white",
    borderBlockColor: "black",

    borderColor: "black",
    borderWidth: 1,
    padding: 8,
  },
});
