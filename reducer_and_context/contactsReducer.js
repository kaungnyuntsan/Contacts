export const contactsReducer = (contacts, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...contacts,
        {
          id: contacts.length + 1,
          name: action.name,
          phone: action.phone,
        },
      ];
    }
    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
};
