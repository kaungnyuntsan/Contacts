import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  FlatList,
  SectionList
} from "react-native";
import randomContacts, {objSortByName} from "./randomContacts";
import { ContactRow } from "./ContactRow";

export default function App() {
  const [contactsView, setContactsView] = useState(true);
  const [contacts, setContacts] = useState(randomContacts);

  const renderItem = ({ item }) => <ContactRow {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Button title="toggle" onPress={() => setContactsView(!contactsView)} />
      <Button title="sort" onPress={() => {
        setContacts([...contacts].sort(objSortByName))
      }} />
      {contactsView && (
        <SectionList
          // data={contacts}
          sections={[{
            title : 'A',
            data : contacts,
          }]}
          renderSectionHeader={
            // obj => console.log(obj.section.title)
            obj => {
              return(
              <View style={{margin : 3}}>
            <Text style={{fontSize : 25}}> {obj.section.title}</Text>
            </View>)
          }
          }

          // renderItem={({ item }) => (
          //   <ContactRow key={item.key} name={item.name} phone={item.phone} />
          // )}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
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
