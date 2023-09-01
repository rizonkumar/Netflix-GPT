# Netflix GPT

This project is a Netflix-inspired web application built using React and other technologies. It aims to showcase various features while utilizing TMDB APIs for movie data.

## Features

- **Login/Sign Up Page**

  - Sign In & Sign Up functionality
  - Redirect to the Browse Page after successful login

- **Browse Page (Accessible when the user is logged in)**

  - Fixed header
  - Main movie section
    - Background trailer video
    - Title & Description of the selected movie
    - Movie Suggestions section
      - List of recommended movies

- **NetflixGPT Component**
  - Search Bar for finding movies
  - Movie Suggestions based on user preferences

## Development Progress

- Created a React application using Create React App
- Configured TailwindCSS for styling
- Implemented header and routing within the app
- Developed Login and Sign Up forms with form validation
- Utilized the useRef Hook for managing form inputs
- Set up Firebase for user authentication
- Deployed the app to production environment
- Enabled user account creation and management
- Integrated Redux store with userSlice for state management
- Implemented user sign out functionality
- Added profile update feature
- Fixed bugs related to user sign up and redirection
- Created TMDB API account, obtained access token
- Fetched data from TMDB API for currently playing movies
- Improved code in Login.js using custom hooks
- Fixed header positioning
- Developed custom hook for managing now playing movies
- Created movieSlice for Redux store
- Fetched and stored movies data and trailer video details
- Embedded autoplaying and muted YouTube trailer videos
- Designed secondary components: movie list and movie card
- Utilized TMDB Image CDN URL for movie images
- Utilized hooks for managing movie sections
- GPT Search Page, Bar.
- Open AI API key
- Fetch GPT Movie suggestion from TMDB
- Memoization

## To-Do (Pending)

- Implement show/hide password functionality
- Reduce line count in Login.js using hooks

Feel free to contribute, suggest improvements, or use this project as a reference for your own creations.
