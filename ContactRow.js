import { Text, StyleSheet, View, Pressable } from "react-native";

const ContactRow = ({ name, id, navigation }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Details", {
          id,
          name,
        })
      }
    >
      <Text style={styles.text}> {name} </Text>
      {/* <Text style={styles.text}> {phone} </Text> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    // borderWidth : 1,
  },
  text: {
    fontSize: 20,
  },
});

export { ContactRow };
