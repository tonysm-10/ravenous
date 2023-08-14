# Yelp Restaurant Finder

## Project Description

The Yelp Restaurant Finder is a web application that enables users to search for restaurants using the Yelp API. Users can input various criteria such as the type of restaurant, search keywords, and city to retrieve a curated list of restaurants that match their preferences.

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Git and GitHub

## Features

- Search Restaurants: Users can search for restaurants based on their preferences, including keywords, cuisine type, and city.
- Filter by Criteria: Users can specify criteria such as cuisine type, price range, ratings, and more to narrow down their restaurant search.
- Detailed Information: The app provides detailed information about each restaurant, including its name, address, rating, and reviews.
- Interactive User Interface: The user-friendly interface allows for easy input of search criteria and seamless browsing of restaurant results.


## Getting Started

1. Clone the repository: `git clone https://github.com/tonysm-10/ravenous.git`
2. Navigate to the project directory: `cd client`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Yelp API Integration

1. Create a `utils` folder in the `src` directory to store the JavaScript code for interacting with the Yelp API.
2. Retrieve your Yelp API credentials and store the API key in a constant.
3. Add a `fetch()` polyfill using the `whatwg-fetch` library to support older browsers.
4. Create a module to interact with the Yelp API using a search function that sends GET requests and processes responses.

## CORS Anywhere (Optional)

If you encounter CORS (Cross-Origin Resource Sharing) issues with your `fetch()` requests, you can use CORS Anywhere to bypass the restrictions. Visit https://cors-anywhere.herokuapp.com/corsdemo to request temporary access and prepend the URL path in your fetch requests with `https://cors-anywhere.herokuapp.com/`.


## Usage

1. Enter your desired search criteria in the search bar.
2. Choose sorting options to refine your search results.
3. Enter the desired City
4. Click the search button to retrieve real-time restaurant recommendations.
5. View the list of businesses and explore their details.

## Contact 

[Email Me](mailto:ayalaarellanoanthony@gmail.com)
To view more of my projects, you can visit my [GitHub profile](https://github.com/tonysm-10).

Happy coding!
