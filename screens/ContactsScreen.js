import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useContext } from "react";
import { ContactsContext, ContactsDispatchContext } from "../ContactsContext";
import {  SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Button, View, Text, Modal } from "react-native";
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
    // const [contactsView, setContactsView] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const contacts = useContext(ContactsContext);
    const dispatch = useContext(ContactsDispatchContext);
  
    const addContact = (name, phone) => {
      dispatch({
        type: "added",
        name,
        phone,
      });
      setModalVisible(!modalVisible);

    };
  
    return (
      <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
       
          
            <Button title="Add Contact" onPress={() => {
              setModalVisible(true)
            }}
               />
            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                // console.log('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}
              presentationStyle="formSheet"

              >
               <AddContactForm addContact={addContact} />
                
            
            </Modal>
           
            <ContactsList contacts={contacts} navigation={navigation} />
          
       
      </SafeAreaView>
    );
}
  

function DetailsScreen({ route }) {
    const contacts = useContext(ContactsContext);
    const { id } = route.params;
  
    const contactData = contacts.find((contact) => contact.id === id);
  
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center",    backgroundColor: "white", }}>
        {/* <Text style={{ fontSize: 20 }}>contact id: {id}</Text> */}
        <Text style={{ fontSize: 20 }}> {contactData.name}</Text>
        <Text style={{ fontSize: 20 }}>{contactData.phone}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      // alignItems: 'center',
      // justifyContent: 'center',
    },
});