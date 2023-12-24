import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useContext } from "react";
import { ContactsContext, ContactsDispatchContext } from "../ContactsContext";
import {  SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Button, View, Text } from "react-native";
import { ContactsList } from "../ContactsList";
import { AddContactForm } from "../AddContactForm";

const Stack = createNativeStackNavigator();

export const ContactsScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    );
};

function HomeScreen({ navigation }) {
    const [contactsView, setContactsView] = useState(true);
    const contacts = useContext(ContactsContext);
    const dispatch = useContext(ContactsDispatchContext);
  
    const addContact = (name, phone) => {
      dispatch({
        type: "added",
        name,
        phone,
      });
      setContactsView(true);
    };
  
    return (
      <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
        {contactsView ? (
          <>
            <Button title="Add Contact" onPress={() => setContactsView(false)} />
            {/* <Button
              title="console Contact"
              onPress={() => console.log(contacts)}
            /> */}
            <ContactsList contacts={contacts} navigation={navigation} />
          </>
        ) : (
          <AddContactForm addContact={addContact} />
        )}
      </SafeAreaView>
    );
}
  

function DetailsScreen({ route }) {
    const contacts = useContext(ContactsContext);
    const { id } = route.params;
  
    const contactData = contacts.find((contact) => contact.id === id);
  
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text style={{ fontSize: 20 }}>contact id: {id}</Text> */}
        <Text style={{ fontSize: 20 }}> {contactData.name}</Text>
        <Text style={{ fontSize: 20 }}>{contactData.phone}</Text>
      </View>
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