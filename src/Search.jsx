import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import SearchResults from './SearchResults';
import TopResultSearch from './TopResultSearch';
import SearchArtist from './SearchArtist';
import SearchAlbum from './SearchAlbum';

const spotifyApi = new SpotifyWebApi({
  clientId: 'c671d3abceae4fe1aa7f5238e4c1ad59'
});

export default function SearchComponent({ accessToken }) { // Receive accessToken as a prop
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchArtists, setSearchArtists] = useState([]);
  const [searchAlbum, setSearchAlbums] = useState([]);
  
  function msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  function getYear(date) {
    const newDate = date.split('-')[0];
    console.log(newDate);
    return newDate;
  }

  function chooseTrack(track) {
    setSearch("")
  }
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) {
      setSearchResults([]);
      setSearchArtists([]);
      setSearchAlbums([]);
      return;
    } 
    if (!accessToken) return;

    let cancel = false;
    Promise.all([
    spotifyApi.searchTracks(search),
    spotifyApi.searchArtists(search),
    
  ])
      .then(async([trackRes,artistsRes]) => {
        if (cancel) return;
        console.log(trackRes.body);
         console.log(artistsRes.body);
        setSearchResults(
          
          trackRes.body.tracks.items.map(track => {
            const biggestAlbumImage = track.album.images.reduce(
              (biggest, image) => {
                return image.height > biggest.height ? image : biggest;
              },
              track.album.images[0]
            );
            return {
              artist: track.artists[0].name,
              title: track.name,
              time: msToMinutesAndSeconds(track.duration_ms),
              type: 'Song',
              uri: track.uri,
              albumUrl: biggestAlbumImage.url

            };
          }),
        );
       
        const artistsData =  artistsRes.body.artists.items.map(artist => {
            const smallesArtistImage = artist.images.reduce(
              (biggest,image) => {
                return image.height > biggest.height ? image : biggest;
              },
              artist.images[0]
            );
            return {
              artist: artist.name,
              type: 'Artist',
              artistImage: smallesArtistImage.url,
              uri: artist.uri,
              id: artist.id
            }
          })
          setSearchArtists(artistsData);

          const ArtistId = artistsData[0].id;
          const ArtistName = artistsData[0].artist;
          console.log(ArtistId)
          console.log(ArtistName)
          if(ArtistId) {
            const albumRes = await spotifyApi.getArtistAlbums(ArtistId);
            if (!cancel) {
              console.log(albumRes.body.items);
              setSearchAlbums(albumRes.body.items.map(album => {
                const biggestAlbumImage = album.images.reduce(
                  (biggest,image) => {
                    return image.height > biggest.height ? image : biggest;
                  },
                  album.images[0]
                );
                return {
                  album: album.name,
                  releaseYear: getYear(album.release_date),
                  albumImage: biggestAlbumImage.url,
                  uri: album.uri,
                  artist: ArtistName
                }
              }))
            }
          }
        
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
          {search && <span className='topresult-span'>Top Result</span> }
          <div className="topresult-container">
            {searchResults.slice(0,1).map(track => (
              <TopResultSearch track={track} key={track.uri} chooseTrack={chooseTrack}/>
            ))}
          </div>
        </div>
      
    <div className="results">
      {search && <span>Songs</span> }
      {searchResults.slice(0,4).map(track => (
        <SearchResults track={track} key={track.uri} chooseTrack={chooseTrack}/>
      ))}
    </div>
    </div>
    {search && <span className='span'>Artists</span> }
    <div className="artists-search">
      
      {searchArtists.slice(0,4).map(artist => (
        <SearchArtist artist={artist} key={artist.uri} chooseTrack={chooseTrack}/>
      ))}
    </div>
    {search && <span className='span album-span' >Albums</span> }
    <div className="albums-search">
      {searchAlbum.slice(0,4).map(album => (
        <SearchAlbum album={album} key={album.uri} chooseTrack={chooseTrack}/>
      ))}
    </div>
    </>
  );
}
