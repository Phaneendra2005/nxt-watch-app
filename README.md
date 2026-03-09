# NxtWatch - Video Streaming App

A YouTube-like video streaming application built with React.js as part of the NXTWAVE CCBP 4.0 Academy assignment.

## 🚀 Live Demo

[https://nxt-watch-app-gae8.vercel.app/](https://nxt-watch-app-gae8.vercel.app/)

## 🔐 Test Credentials

- **Username:** `rahul`
- **Password:** `rahul@2021`

## 📋 Features

- **Authentication** - Login/Logout with JWT token-based authentication
- **Home Route** - Browse all videos with search functionality
- **Trending Route** - View trending videos
- **Gaming Route** - Browse gaming videos
- **Saved Videos Route** - Save and manage your favourite videos
- **Video Item Details** - Watch videos with like, dislike and save functionality
- **Dark/Light Theme** - Toggle between dark and light themes
- **Protected Routes** - Authenticated access to all routes except login
- **Failure View** - Graceful error handling with retry option
- **No Results View** - Friendly message when no videos are found

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **React Router DOM** - Client-side routing
- **Styled Components** - Component-level styling
- **Context API** - State management for theme and saved videos
- **JWT Cookies** - Authentication token storage
- **React Player** - Video playback
- **React Icons** - Icon library
- **Reactjs Popup** - Logout confirmation popup
- **React Loader Spinner** - Loading indicators

## 📁 Project Structure
```
src/
├── components/
│   ├── Header/
│   ├── Sidebar/
│   ├── Home/
│   ├── Trending/
│   ├── Gaming/
│   ├── SavedVideos/
│   ├── VideoItem/
│   ├── VideoItemDetails/
│   ├── FailureView/
│   ├── Login/
│   ├── NotFound/
│   └── ProtectedRoute/
├── context/
│   ├── ThemeContext.js
│   └── SavedVideosContext.js
├── App.js
└── index.js
```

## ⚙️ Installation & Setup
```bash
# Clone the repository
git clone https://github.com/Phaneendra2005/nxt-watch-app.git

# Navigate to project directory
cd nxt-watch-app

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm start
```

## 📱 Routes

| Route | Description |
|-------|-------------|
| `/login` | Login page |
| `/` | Home - All videos |
| `/trending` | Trending videos |
| `/gaming` | Gaming videos |
| `/saved-videos` | Saved videos |
| `/videos/:id` | Video details page |

## ✅ Test Results

**270/270 test cases passed**

## 📸 Screenshots

### Login Page
![Login Page](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png)

## 🎓 About

This project was built as part of the **NXTWAVE CCBP 4.0 Academy** React.js course.

## 📄 License

This project is for educational purposes only.
