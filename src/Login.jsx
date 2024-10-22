import React from 'react'


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a4944007ef3746d38ae7e21172a31990&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
export default function Login() {
  return (
    <div className="login-container">
        <button><a href={AUTH_URL}>Login With Spotify</a></button>
    </div>
  )
}
