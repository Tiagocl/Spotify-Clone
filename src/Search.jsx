import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import SearchResults from './SearchResults';
import TopResultSearch from './TopResultSearch';

const spotifyApi = new SpotifyWebApi({
  clientId: 'c671d3abceae4fe1aa7f5238e4c1ad59'
});

export default function SearchComponent({ accessToken }) { // Receive accessToken as a prop
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  function chooseTrack(track) {
    setSearch("")
  }
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search)
      .then(res => {
        if (cancel) return;
        console.log(res.body.tracks.items);
        setSearchResults(
          
          res.body.tracks.items.map(track => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                return image.height < smallest.height ? image : smallest;
              },
              track.album.images[0]
            );
            return {
              artist: track.artists[0].name,
              title: track.name,
              time: msToMinutesAndSeconds(track.duration_ms),
              type: track.type,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url

            };
          })
        );
      })
      .catch(err => console.error('Spotify API search error:', err));
      
    return () => { cancel = true; };
  }, [search, accessToken]);

  return (
    <>
    <div className="search-container">
      <input 
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
    </div>
      <div className="song-results">
        <div className="top-search">
          <span>Top result</span>
          <div className="topresult-container">
            {searchResults.slice(0,1).map(track => (
              <TopResultSearch track={track} key={track.uri} chooseTrack={chooseTrack}/>
            ))}
          </div>
        </div>
      
    <div className="results">
      <span>Songs</span>
      {searchResults.slice(0,4).map(track => (
        <SearchResults track={track} key={track.uri} chooseTrack={chooseTrack}/>
      ))}
    </div>
    </div>
    </>
  );
}
