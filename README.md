<!-- API_URL ="https://api.themoviedb/3/movie/id?api_key=767a7cc8de7d102579d3d1cf9acd65e8"

API_IMG = "https://image.tmdb.org/t/p/w500/"

API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=767a7cc8de7d102579d3d1cf9acd65e8&query"
 -->
This movie site was built with React.js (a javascript framwork) along with tailwind css (a CSS framework).
In this project contains various file component which perfoms specific functions starting from the App.js to the Home.js down to the Main.js to the MovieCard.js and finally the MovieDetails.js



App.js 

The App.js code defines the main application component, which is where the routing configuration for a react application is being set up and imported as well.
To configure the routing we install the react-router-dom using the npm install-react-router-dom and import them into the components we are routing and linking from just like we did in the App.js.The react router dom defines routes for different URLs and specifies which components should be rendered for each route, providing the navigation and page rendering logic for the application.




Home.js

The Home.js serves as the main page for the movie app

Imports: The code imports necessary modules and components, including React, custom components like `Main`, `MovieCard`, and `AddFavourite`, as well as icons from the `@fortawesome/react-fontawesome` library.

State Management: The component uses the `useState` hook to manage two pieces of state: `movies`: An array that stores movie data fetched from an API. `term`: A string that stores the user's search query.

Fetching Popular Movies: Upon component initialization (using the `useEffect` hook), it fetches data from The Movie Database (TMDb) API for popular movies and stores the first 10 results in the `movies` state.

Search Functionality: The `handleSearch` function is triggered when the user submits a search query. It sends a request to the TMDb API's search endpoint with the user's search term, updates the `movies` state with the search results, and re-renders the component to display the search results. etc




Main.js 

The Main.js sets up a dynamic movie slider that fetches trending movies from an API and displays them with a title, overview, and release date. Users can navigate through the slides, and the slider also includes buttons for actions like playing the movie or adding it to a "Watch Later" list.


UseEffect Hook:
   - Inside the `useEffect` hook, an Axios GET request is made to an API endpoint (`requests.requestTrending`) to fetch trending movies which is imported from the request.js file.
   - The fetched movie data is then stored in the `movies` state variable.

truncateString Function:
   - This is a utility function that truncates a string if its length exceeds a specified number of characters. It is used to limit the length of movie overviews displayed in the slider.

Slider Settings:
   - The `settings` object contains configuration options for the `Slider` component. These options control the behavior of the movie slider, including autoplay, speed, and navigation.



MovieCard.js
The Moviecard.js defines a reusable MovieCard component that can display movie information in a card format, complete with poster images, titles, vote averages, and release dates. It is intended for use within a larger movie-related application, possibly within a list of movies or on a movie details page.