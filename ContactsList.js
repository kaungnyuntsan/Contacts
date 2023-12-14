import { SectionList, View, Text, Button } from "react-native";
import { ContactRow } from "./ContactRow";

const ContactsList = ({ contacts, navigation }) => {
  const renderItem = ({ item }) => {
    // console.log(item.key);
    return <ContactRow {...item} navigation={navigation} />;
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={{ margin: 3 }}>
        <Text style={{ fontSize: 20 }}> {section.title}</Text>
        {/* <Button
          title="console contactsByLetter A"
          onPress={() => console.log(contactsByLetter["A"])}
        /> */}
      </View>
    );
  };

  // goal   [ { key: 1, name: 'Emanuel Sexton', phone: '708-833-506' },
  // { key: 2, name: 'Joel Frank', phone: '433-352-239' }, ]

  const contactsByLetter = contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map((title) => {
      return {
        title,
        data: contactsByLetter[title],
      };
    });

  return (
    <SectionList
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
    />
  );
};

export { ContactsList };
