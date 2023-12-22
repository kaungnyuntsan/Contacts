export const getContactsFromApi = async () => {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=2&exc=login"
    );
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error(error);
  }
};
