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
} from "react-native";
import randomContacts from "./randomContacts";
import { ContactsList } from "./ContactsList";

export default function App() {
  const [contactsView, setContactsView] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="toggle" onPress={() => setContactsView(!contactsView)} />
      {contactsView && (
        <FlatList
          data={randomContacts}
          // renderItem={({ item }) => (
          //   <ContactsList key={item.key} name={item.name} phone={item.phone} />
          // )}
          renderItem={({ item }) => <ContactsList {...item} />}
        />
      )}
    </SafeAreaView>
  );

  {
    /* <Button title="console" onPress={() => console.log(contactsView)} /> */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
