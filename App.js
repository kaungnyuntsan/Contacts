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
import randomContacts, {objSortByName} from "./randomContacts";
import { ContactsList } from "./ContactsList";

export default function App() {
  const [contactsView, setContactsView] = useState(true);
  const [contacts, setContacts] = useState(randomContacts);

  const renderItem = ({ item }) => <ContactsList {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Button title="toggle" onPress={() => setContactsView(!contactsView)} />
      <Button title="sort" onPress={() => {
        setContacts([...contacts].sort(objSortByName))
      }} />
      {contactsView && (
        <FlatList
          data={contacts}
          // renderItem={({ item }) => (
          //   <ContactsList key={item.key} name={item.name} phone={item.phone} />
          // )}
          renderItem={renderItem}
        />
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
