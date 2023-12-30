import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import { getContactsFromApi } from "../api";
import { useGetContactsQuery } from "../apiSlice";

export const CloudScreen = () => {
  // const [cloudContacts, setCloudContacts] = useState([]);
  const {
    data: cloudContacts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  let content;
  if (isLoading) {
    content = <Text> Loading ... </Text>;
  } else if (isSuccess) {
    content = cloudContacts.results.map((contact) => (
      <Text key={contact.id.value} style={{ fontSize: 20 }}>
        {" "}
        {contact.email}{" "}
      </Text>
    ));
  } else if (isError) {
    content = <Text> {error.toString()}</Text>;
  }

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  // const fetchApi = async () => {
  //   try {
  //     const data = await getContactsFromApi();
  //     setCloudContacts(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Button
        title="console cloudContacts"
        onPress={() => console.log(cloudContacts.results)}
      />
      {content}
      {/* {cloudContacts.map((contact) => (
        <View key={contact.id.value}>
          <Text style={styles.text}> {contact.email}</Text>
        </View>
      ))} */}
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
