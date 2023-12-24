import {  useReducer } from "react";
import randomContacts from "./randomContacts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { contactsReducer } from "./contactsReducer";
import { ContactsContext, ContactsDispatchContext } from "./ContactsContext";
import { CloudScreen } from "./screens/CloudScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ContactsScreen } from "./screens/ContactsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [contacts, dispatch] = useReducer(contactsReducer, randomContacts);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ContactsContext.Provider value={contacts}>
          <ContactsDispatchContext.Provider value={dispatch}>
            <Tab.Navigator
              // initialRouteName="Cloud"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  const icons = {
                    Contacts: focused ? "people" : "people-outline",
                    Cloud: focused
                      ? "cloud-download"
                      : "cloud-download-outline",
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
              <Tab.Screen name="Cloud" component={CloudScreen} />
            </Tab.Navigator>
          </ContactsDispatchContext.Provider>
        </ContactsContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


