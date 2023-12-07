import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  FlatList,
  SectionList,
  TextInput,
} from "react-native";
import randomContacts, { objSortByName } from "./randomContacts";
import { ContactRow } from "./ContactRow";
import { ContactsList } from "./ContactsList";
import { AddContactForm } from "./AddContactForm";

export default function App() {
  const [contactsView, setContactsView] = useState(true);
  const [contacts, setContacts] = useState(randomContacts);

  const addContact = (name, phone) => {
    setContacts([
      ...contacts,
      {
        key: contacts.length + 1,
        name,
        phone,
      },
    ]);
    setContactsView(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Add Contact"
        onPress={() => setContactsView(!contactsView)}
      />
      {/* <Button
        title="sort"
        onPress={() => {
          setContacts([...contacts].sort(objSortByName));
        }}
      /> */}
      {/* <TextInput
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
          setContacts([
            ...contacts,
            {
              key: contacts.length + 1,
              name,
              phone,
            },
          ]);
        }}
      /> */}
      {contactsView ? (
        <ContactsList contacts={contacts} />
      ) : (
        <AddContactForm addContact={addContact} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
