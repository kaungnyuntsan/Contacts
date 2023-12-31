import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text, StyleSheet, Button } from "react-native";
// import { getContactsFromApi } from "../api";
import { useGetContactsQuery } from "../apiSlice";
import { ContactsList } from "../ContactsList";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export const CloudScreen = () => {
  return (
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
  );
};

const CloudHomeScreen = ({ navigation }) => {
  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const transformContact = (contact) => {
    return {
      name: `${contact.name.first} ${contact.name.last}`,
      id: contact.phone,
    };
  };

  let content;
  if (isLoading) {
    content = <Text style={{ fontSize: 20 }}> Loading ... </Text>;
  } else if (isSuccess) {
    const cloudContacts = data.results;
    const contacts = cloudContacts.map(transformContact);
    return <ContactsList contacts={contacts} navigation={navigation} />;
  } else if (isError) {
    content = <Text> {error.toString()}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        title="console cloudContacts"
        onPress={() => console.log(cloudContacts)}
      /> */}
      {content}
    </SafeAreaView>
  );
};

function CloudDetailsScreen() {
  // const contacts = useContext(ContactsContext);
  // const { id } = route.params;

  // const contactData = contacts.find((contact) => contact.id === id);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text style={{ fontSize: 20 }}>contact id: {id}</Text> */}
      <Text style={{ fontSize: 20 }}> coming soon. </Text>
      {/* <Text style={{ fontSize: 20 }}>{contactData.phone}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
