# 🎵 Spotify Clone 

This is a front-end-focused Spotify-clone, designed as a portfolio project to showcase core music streaming features and a sleek, modern user interface. The app replicates essential functionalities of Spotify, including music streaming, search capabilities, and user authentication. 



## ✨ Features

- **🎧 Music Streaming:** Premium users can stream music seamlessly.
(For demo purposes, this feature is showcased in the Demo Video).

- **🔍 Search Functionality:**  Search for tracks, artists, or albums.

- **🔑 User Authentication:** Secure login system to access app features using Spotify's OAuth.



## 🛠️ Technology Stack

- **Frontend:** React + Vite

- **Backend:** Node.js + Express.js

- **Spotify API:** Interfacing with the Spotify Web API for user authentication, Search funtionality, User Tracks and Playlists, and music streaming.

  This app emphasizes front-end design and functionality while incorporating a backend built with Express.js to handle authentication and token management.

## 🛑 Spotify API Limitations

Due to Spotify's API guidelines, this app is currently in development mode. In this mode, only manually approved users can access the app. As a result, by default, only my account is authorized to use the app.

### 👨‍💻 How to Access the App

There are 3 ways you can explore the project:

### **1.** Set Up Your Own App

You can create your own app on the Spotify Developer Dashboard and replace the .env variables with your app's credentials. This way, you can use your personal Spotify account.

- Go to spotify developer (https://developer.spotify.com)
- In the Top right corner click on dashboard.
- Create new App (just need to give it a name and in the Redirect URIs put http://localhost:5173)
- Replace the following variables in your .env file:
```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
REDIRECT_URI=your_redirect_uri
```

### **2.** View the code & demo Videos 
  
If you'd prefer not to set up the app, you can still explore the codebase to understand the project or watch the demo videos to see the app in action.

### **3.** Ask for permission

I can enter your username as one of the approved users on my app. Just send an email to (tiagocamposlourenco@gmail.com)

## 🚀 Installation & Setup

Because of Spotify's guidelines, the app only works for my account.
Follow these steps to run the app locally:

**1.** Clone the repository
```
git clone https://github.com/Tiagocl/Spotify-Clone.git
cd Spotify-Clone
```
**2.** Install Dependencies
```
npm install (on the root folder)
npm install (cd src/server)
```

**3.** Run the App
```
npm run dev (on the root folder)
npm run devStart( cd src/server)
```


## 🎥 Demo Video









## 📋 Usage Instructions

**1.** Open the app in your browser (default is http://localhost:5173 for Vite).

**2.** Log in to your account to access the features.(if you created the app) 

**3.** Use the search bar to find your favorite music.

**4.** Premium users can stream music directly.

The interface is intuitive, making it easy to navigate and explore.




