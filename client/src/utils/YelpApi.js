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
// Example usage:
// (async () => {
//   try {
//     const results = await searchBusinesses('italian', 'Los Angeles', 'best_match');
//     console.log('Fetched data:', results);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// })();


// const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
// const API_KEY = '2aGmKrJALL1oGwZVpUrPgJaqVj9G0mkV69wL4QKnese2LC_TdPQ9B_XcQ377M0-Evs-aYcr-jGAMSWyeVJX7g29BkDfRinQX74hGrOA7TtMf8M0Wwb_uFZ0q5jfUZHYx';

// async function searchBusinesses(term, location, sortBy) {
//   try {
//     const response = await fetch(
//       `${BASE_URL}?term=${term}&location=${location}&sort_by=${sortBy}&limit=20`,
//       {
//         headers: {
//           'accept': 'application/json',
//           'x-requested-with': 'xmlhttprequest',
//           'Authorization': `Bearer ${API_KEY}`
//         }
//       }
//     );

//     if (!response.ok) {
//       throw new Error('Failed to fetch data from Yelp API');
//     }

//     const data = await response.json();
//     return data.businesses;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// export default searchBusinesses;



// const getYelp = async ({ inputSearchBusiness, inputWhere, select }) => {
//   try {
//     const apiKey = '2aGmKrJALL1oGwZVpUrPgJaqVj9G0mkV69wL4QKnese2LC_TdPQ9B_XcQ377M0-Evs-aYcr-jGAMSWyeVJX7g29BkDfRinQX74hGrOA7TtMf8M0Wwb_uFZ0q5jfUZHYx';
//     const url = `https://api.yelp.com/v3/businesses/search?sort_by=${select}&limit=20&term=${inputSearchBusiness}&location=${inputWhere}`;
    
//     const response = await fetch(url, {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch data from Yelp API');
//     }

//     const data = await response.json();
//     console.log(data.businesses);
//     return data.businesses;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export default getYelp;

