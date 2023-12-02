import { Text, StyleSheet, View } from "react-native";

const ContactsList = ({ name, phone }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {name} </Text>
      <Text style={styles.text}> {phone} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
});

export { ContactsList };
