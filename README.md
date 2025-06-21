# AuraSounds

**AuraSounds** is a mobile application for restoring inner balance through music, affirmations, and practices related to mood and chakras.

## Features
- Thematic playlists for different emotional states (Calm, Inspired, Focused, Clear, etc.)
- Categories of affirmations and chakras
- Components implemented in the Figma design style with responsive styling

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

## 📦 Assignment 7: Performance Optimization and Animations

### 1. App Analysis
- Selected `CategoryTabs` and `FavouritesTabs` for animation with `LayoutAnimation`.
- Identified `HomeScreen` and `FavouritesScreen` as components with frequent re-renders.
- Checked project dependencies; **no heavy libraries like moment or lodash found**.

### 2. Animation
- Implemented smooth and visible animations for tab and category switching using React Native’s `LayoutAnimation`.
- Animations enhance UX by smoothly transitioning active tabs/categories.

### 3. Render Optimization
- Wrapped key components (`HomeScreen`, `FavouritesScreen`, `CategoryTabs`, `FavouritesTabs`, `Card`, and `AffirmationSection`) with `React.memo` to prevent unnecessary re-renders.
- Used `useCallback` to memoize functions passed as props.
- Applied `useMemo` to memoize computed values and styles.

### 4. Dependency Cleanup
- Verified dependencies for heavy packages; none found that require replacement.
- Project remains lightweight and maintainable.

## Results
- Improved app responsiveness by reducing redundant renders.
- Enhanced UI fluidity with smooth, native animations.
- Clean and maintainable code with proper memoization and callbacks.

![Animation](./screenshots/animation.gif)

