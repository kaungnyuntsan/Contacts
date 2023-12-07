import React, { useState } from "react";
import { TextInput, View, Button } from "react-native";

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, margin: 10, padding: 10 }}
        placeholder="name"
        value={name}
        onChangeText={setName}
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

export { AddContactForm };
