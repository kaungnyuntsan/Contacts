import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

export const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={{ borderWidth: 1, margin: 10, padding: 10, marginTop: 40 }}
        placeholder="name"
        value={name}
        onChangeText={setName}
        autoFocus
      />
      <TextInput
        style={{ borderWidth: 1, margin: 10, padding: 10 }}
        placeholder="phone"
        value={phone}
        keyboardType="numeric"
        onChangeText={setPhone}
      />
      <Button
        title="add"
        onPress={() => {
          addContact(name, phone);
        }}
        disabled={!(Boolean(name) && Boolean(+phone))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
  },
});
