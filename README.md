# AuraSounds

**AuraSounds** is a mobile application for restoring inner balance through music, affirmations, and chakra-based practices.

## 🎯 Key Features
- Thematic playlists for different emotional states (Calm, Inspired, Focused, Clear, etc.)
- Categories for affirmations and chakras
- Favorites support for playlists and affirmations
- Modern Figma-style interface with adaptive styling

---

## 📘 Final Project: State Management, UX Improvements and New Features

### ✅ **1. State Management**

- **Context API for Theme:**
  - Implemented `ThemeContext` to manage light/dark theme globally
  - Dynamically applied theme colors to components and headers

- **Redux for Favorites (Playlists + Affirmations):**
  - Created `favouritesSlice` using Redux Toolkit
  - Enabled adding/removing playlists to favorites in `PlaylistDetailsScreen`
  - Enabled saving/removing affirmations in `AffirmationSection`
  - Displayed saved items in `FavouritesScreen` with two tabs: playlists and affirmations

---

### ✨ **2. New Functionalities and Components**

- **New Functionality:**
  - Saving affirmations to the favorites list using Redux

- **New Component:**
  - `PostCard` component for rendering affirmations in the favorites screen

- **Favorite Buttons:**
  - Save/Remove buttons for affirmations
  - Like button for playlists

- **Tabs and Filtering:**
  - `FavouritesTabs` for switching between playlists and affirmations
  - `CategoryTabs` for category filtering on the home screen

---

### 🎨 **3. UI/UX Enhancements**

- Adaptive styling with theme-based color usage
- Shadows, spacing, and responsive sizing applied across elements
- Reusable components: `Card`, `PostCard`, `AffirmationSection`, `CustomButton`, `Player`

---

### 🧠 **4. Architecture and Modularity**

- Clear file structure: components, styles, API, Redux, context
- `Redux` used for global favorites state
- `Context API` used for theme handling
- `api.js` handles external API (mocked affirmations)
- Navigation: Stack + Bottom Tabs + nested stacks for Profile/Favourites

![Favourites](./screenshots/favourites.png)
