import 'whatwg-fetch';

const API_KEY = '2aGmKrJALL1oGwZVpUrPgJaqVj9G0mkV69wL4QKnese2LC_TdPQ9B_XcQ377M0-Evs-aYcr-jGAMSWyeVJX7g29BkDfRinQX74hGrOA7TtMf8M0Wwb_uFZ0q5jfUZHYx';
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';

async function searchBusinesses(term, location, sortBy) {
  try {
    const response = await fetch(
      `${BASE_URL}?term=${term}&location=${location}&sort_by=${sortBy}&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw await response.json(); // Throw the error response as JSON
    }

    const data = await response.json();
    return data.businesses;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for the caller to handle
  }
}
export default searchBusinesses;


