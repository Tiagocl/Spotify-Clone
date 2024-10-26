import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import SearchResults from './SearchResults';

const spotifyApi = new SpotifyWebApi({
  clientId: 'c671d3abceae4fe1aa7f5238e4c1ad59'
});

export default function SearchComponent({ accessToken }) { // Receive accessToken as a prop
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

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
    <div className="results">
      {searchResults.map(track => (
        <SearchResults track={track} key={track.uri} chooseTrack={chooseTrack}/>
      ))}
    </div>
    </>
  );
}
