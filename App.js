import { useState } from "react";
import { StyleSheet, Button } from "react-native";
import randomContacts from "./randomContacts";
import { ContactsList } from "./ContactsList";
import { AddContactForm } from "./AddContactForm";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {contactsView ? (
          <>
            <Button
              title="Add Contact"
              onPress={() => setContactsView(false)}
            />
            <ContactsList contacts={contacts} />
          </>
        ) : (
          <AddContactForm addContact={addContact} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
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
