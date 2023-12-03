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
} from "react-native";
import randomContacts, { objSortByName } from "./randomContacts";
import { ContactRow } from "./ContactRow";
import { ContactsList } from "./ContactsList";

export default function App() {
  const [contactsView, setContactsView] = useState(true);
  const [contacts, setContacts] = useState(randomContacts);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="toggle" onPress={() => setContactsView(!contactsView)} />
      <Button
        title="sort"
        onPress={() => {
          setContacts([...contacts].sort(objSortByName));
        }}
      />
      {contactsView && <ContactsList contacts={contacts} />}
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
