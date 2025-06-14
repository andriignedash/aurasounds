# AuraSounds

**AuraSounds** is a mobile application for restoring inner balance through music, affirmations, and practices related to mood and chakras.

## Features
- Thematic playlists for different emotional states (Calm, Inspired, Focused, Clear, etc.)
- Categories of affirmations and chakras
- Components implemented in the Figma design style with responsive styling

## 📦 Assignment 5: API Integration and Data Handling

This app implements all required steps of the [cross_assignment_5] task:

- ✅ **API Selection:** Since the app theme is focused on mindfulness and affirmations, we used a mock `affirmations.json` file as a local data source (imitating a public REST API).
- ✅ **API Integration:** The logic is modularized into `api.js`, with a simulated `fetchAffirmations()` function that returns Promise-based data.
- ✅ **State Management:** Data is loaded and handled via `useState` in the `AffirmationSection` component.
- ✅ **Data Display:** The affirmation text is shown on the screen with buttons: "Save to favorites" and "New affirmation".
- ✅ **Loading/Error Handling:** Loading state and error messages are shown via `ActivityIndicator` and `Text`.
- ✅ **Navigation:** The component is fully integrated in the `HomeScreen` tab structure via a category switcher.

### 🎥 Demo: Affirmation Switching

![Affirmation Demo](./screenshots/affirmation-demo.gif)

## 📗 Assignment 6: State Management with Context API and Redux

- ✅ **Context API for Theme:**  
  - Implemented `ThemeContext` with `ThemeProvider` to manage light/dark themes globally.  
  - Added theme toggle switch allowing dynamic theme changes.  
  - Applied theme colors consistently across multiple components and navigation headers.

- ✅ **Redux for Favorites Management:**  
  - Created `favoritesSlice` using Redux Toolkit with actions to add and remove playlists from favorites.  
  - Configured Redux store and connected it to the app via `<Provider>`.  
  - Managed favorites state via `useSelector` and `useDispatch` hooks.  
  - Enabled adding/removing favorites in `PlaylistDetailsScreen` via a like button.  
  - Displayed favorite playlists on the `FavouritesScreen` with navigation to playlist details.

- ✅ **Code Modularity and Clean Architecture:**  
  - Organized Context and Redux slices in separate files.  
  - Used constants for colors and texts for better maintainability.  
  - Passed dynamic data via props.  
  - Maintained clear and commented code following best practices.

### 🎥 Demo: Themes and Favourites

![Themes and Favourites Demo](./screenshots/themesAndFavourites.gif)
