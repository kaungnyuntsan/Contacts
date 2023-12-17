import { useState, useReducer, useContext } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import randomContacts from "./randomContacts";
import { ContactsList } from "./ContactsList";
import { AddContactForm } from "./AddContactForm";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { contactsReducer } from "./contactsReducer";
import { ContactsContext, ContactsDispatchContext } from "./ContactsContext";
import { SettingsScreen } from "./SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ContactsScreen = () => {
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

export default function App() {
  const [contacts, dispatch] = useReducer(contactsReducer, randomContacts);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ContactsContext.Provider value={contacts}>
          <ContactsDispatchContext.Provider value={dispatch}>
            <Tab.Navigator
              // initialRouteName="Settings"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  const icons = {
                    Contacts: focused ? "people" : "people-outline",
                    Settings: focused ? "settings" : "settings-outline",
                  };

                  return (
                    <Ionicons
                      name={icons[route.name]}
                      size={size}
                      color={color}
                    />
                  );
                },
              })}
            >
              <Tab.Screen
                name="Contacts"
                component={ContactsScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </ContactsDispatchContext.Provider>
        </ContactsContext.Provider>
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
