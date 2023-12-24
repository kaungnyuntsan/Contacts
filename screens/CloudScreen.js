import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { getContactsFromApi } from "../api";

export const CloudScreen = () => {
  const [cloudContacts, setCloudContacts] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const data = await getContactsFromApi();
      setCloudContacts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="console cloudContacts"
        onPress={() => console.log(cloudContacts)}
      />
      {cloudContacts.map((contact) => (
        <View key={contact.id.value}>
          <Text style={styles.text}> {contact.email}</Text>
        </View>
      ))}
    </View>
  );
};

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


