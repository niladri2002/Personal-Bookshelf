# Book Search and Personal Bookshelf Web App

Welcome to the Book Search and Personal Bookshelf Web App! This project allows users to search for books using the Open Library API and save them to their personal bookshelf for future reference.

# Personal-Bookshelf
Personal Bookshelf is a React web app that enables users to search for books using the Open Library API, efficiently handling API requests with debouncing. Users can save their favorite books to a personal bookshelf stored persistently using localStorage.

## Features

### Book Search Page
- Users can search for books by typing in the search input field.
- The search results are displayed in real-time as the user types.
- The search results are fetched from the Open Library API.
- The search query is debounced using a timer to enhance user experience and optimize API usage.

### Personal Bookshelf Page
- Users can add books from the search results to their personal bookshelf.
- The personal bookshelf is stored persistently using the Web Storage API (localStorage).
- A separate page is provided to display the user's personal bookshelf.
- Users can remove books from their personal bookshelf.

## Tech Stack
- React: The project is built using React.js, a popular JavaScript library for building user interfaces.
- axios: Axios is used for making HTTP requests to the Open Library API.
- localStorage: The Web Storage API is utilized to store the user's personal bookshelf data persistently.
- CSS Modules: CSS Modules are used for styling components, providing scoped CSS and preventing class name collisions.

## Implementation Details
- The project is initialized using Create React App (CRA), a popular toolchain for building React applications.
- Debouncing is implemented on the search input to prevent frequent API calls while typing.
- Each book search query triggers an API call to fetch search results from the Open Library API.
- The fetched books are displayed as cards on the search results page, with options to add them to the user's personal bookshelf.
- The personal bookshelf page displays the books stored in localStorage, allowing users to manage their saved books.
- Smooth transitions and user feedback are incorporated to enhance the overall user experience.

## API Handling and Efficiency
- API requests are handled efficiently by debouncing the search input. This prevents excessive API calls while the user is typing and improves the performance of the application.
- The Open Library API is queried with appropriate parameters (such as limit and page) to fetch a manageable number of search results per request, optimizing network usage and response times.
- The application's architecture ensures that API calls are made only when necessary, minimizing unnecessary data fetching and reducing server load.
- Error handling mechanisms are in place to gracefully handle API errors and network issues, providing a seamless user experience even in adverse conditions.

## Getting Started
Follow these steps to set up and run the project locally:

1. Clone the repository to your local machine using Git:

```bash
git clone https://github.com/niladri2002/Personal-Bookshelf
```

2. Navigate to the project directory:

```bash
cd Personal-Bookshelf
cd frontend
```

3.Install dependencies using npm :
```bash
npm install
```

4.Run the development server:
```bash
npm start
```

5.Open your browser and visit http://localhost:3000 to view the application.
