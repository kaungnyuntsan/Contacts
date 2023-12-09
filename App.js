import { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import randomContacts from "./randomContacts";
import { ContactsList } from "./ContactsList";
import { AddContactForm } from "./AddContactForm";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
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
      {contactsView ? (
        <>
          <Button title="Add Contact" onPress={() => setContactsView(false)} />
          <ContactsList contacts={contacts} navigation={navigation} />
        </>
      ) : (
        <AddContactForm addContact={addContact} />
      )}
    </SafeAreaView>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
