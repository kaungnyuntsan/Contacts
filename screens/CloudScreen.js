import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useGetContactsQuery } from "../redux/apiSlice";

import { SafeAreaView } from "react-native-safe-area-context";
import { CloudContactsContext } from "../reducer_and_context/ContactsContext";
import { ContactsList } from "../features/ContactsList";

const Stack = createNativeStackNavigator();

export const CloudScreen = () => {
  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const transformContact = (contact) => {
    return {
      ...contact,
      name: `${contact.name.first} ${contact.name.last}`,
      id: contact.phone,
    };
  };

  let content;
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 20 }}> Loading ... </Text>
      </SafeAreaView>
    );
  } else if (isSuccess) {
    const cloudContacts = data.results;
    const contacts = cloudContacts.map(transformContact);
    // console.log(contacts);
    return (
      <CloudContactsContext.Provider value={contacts}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={CloudHomeScreen}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={CloudDetailsScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </CloudContactsContext.Provider>
    );
  } else if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <Text> {error.toString()}</Text>;
      </SafeAreaView>
    );
  }
};

const CloudHomeScreen = ({ navigation }) => {
  const contacts = useContext(CloudContactsContext);
  // console.log(contacts);
  return (
    <View style={{ backgroundColor: "white" }}>
      <ContactsList contacts={contacts} navigation={navigation} />
    </View>
  );
};

function CloudDetailsScreen({ route }) {
  // const contacts = useContext(ContactsContext);
  const { id } = route.params;
  const contacts = useContext(CloudContactsContext);

  const contact = contacts.find((contact) => contact.id === id);
  // console.log(contact);

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 20 }}>contact id: {id}</Text> */}
      <Image style={styles.photo} source={{ uri: contact.picture.large }} />
      <Text style={[styles.text, styles.contactdetail]}> {contact.name} </Text>

      <Text style={[styles.text, styles.contactdetail]}> {contact.phone}</Text>
      <Text style={[styles.text, styles.contactdetail]}> {contact.cell}</Text>
      <Text style={[styles.text, styles.contactdetail]}> {contact.email}</Text>
      {/* <Text style={[styles.text, styles.contactdetail]}> </Text> */}

      <Text style={[styles.text, styles.contactdetail]}>
        {" "}
        {contact.location.street.number} {contact.location.street.name},{" "}
        {contact.location.city}, {contact.location.state},{" "}
        {contact.location.postcode}, {contact.location.country}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
  },
  photo: {
    width: 128,
    height: 128,
    margin: 10,
    borderRadius: 100,
  },
  contactdetail: {
    padding: 2,
    margin: 2,
  },
});
