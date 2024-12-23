import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import SearchResults from '../components/SearchResults';
import TopResultSearch from '../components/TopResultSearch';
import SearchArtist from '../components/SearchArtist';
import SearchAlbum from '../components/SearchAlbum';
import SearchPlaylists from '../components/SearchPlaylists';
import {Search,ChevronLeft} from 'lucide-react'
import spotifyApi from '../api/SpotifyApi';
import {useNavigate} from 'react-router-dom';

export default function SearchComponent({ accessToken, setPlayingTrack }) { 
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchArtists, setSearchArtists] = useState([]);
  const [searchAlbum, setSearchAlbums] = useState([]);
  const [searchPlaylists, setSearchPlaylists] = useState([]);
  
  function handleHomeCLick() {
    navigate(`/`)
    console.log('clicked home')
}
  
  function msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  function getYear(date) {
    const newDate = date.split('-')[0];

    return newDate;
  }

  function chooseTrack(track) {
    setPlayingTrack(track)
    console.log("track",track)
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
      setSearchPlaylists([]);
      return;
    } 
    if (!accessToken) return;

    let cancel = false;
    Promise.all([
    spotifyApi.searchTracks(search),
    spotifyApi.searchArtists(search),
    spotifyApi.searchPlaylists(search),
    spotifyApi.getMe(),
    
  ])
      .then(async([trackRes,artistsRes,playlistsRes,Me]) => {
        if (cancel) return;
          
          const songsData = trackRes.body.tracks.items.map(track => {
            if (track === null) return null;
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
          })
          .filter(track => track !== null);
          setSearchResults(songsData);
       
        const artistsData =  artistsRes.body.artists.items.map(artist => {
          if (artist === null) return null;
            const biggestArtistImage = artist.images.reduce(
              (biggest,image) => {
                return image.height > biggest.height ? image : biggest;
              },
              artist.images[0]
            );
            return {
              artist: artist.name,
              type: 'Artist',
              artistImage: biggestArtistImage.url,
              uri: artist.uri,
              id: artist.id
            }
          })
          .filter(artist => artist !== null);
          setSearchArtists(artistsData);

          console.log(playlistsRes.body.playlists.items);
          const playlistData = playlistsRes.body.playlists.items.map(playlist => {
            if (playlist === null) return null;

            const biggestPlaylistImage = playlist.images.reduce(
              (biggest,image) => {
                return image.height > biggest.height ? image : biggest;
              },
              playlist.images[0]
            );
            return {
              name: playlist.name,
              owner: 'By ' + playlist.owner.display_name,
              playlistImage: biggestPlaylistImage.url,
              uri: playlist.uri
            }
          })
          .filter(playlist => playlist !== null);
          setSearchPlaylists(playlistData);

          const ArtistId = artistsData[0].id;
          const ArtistName = artistsData[0].artist;
          if(ArtistId) {
            const albumRes = await spotifyApi.getArtistAlbums(ArtistId);
            if (!cancel) {
              
              setSearchAlbums(albumRes.body.items.map(album => {
                if (album === null) return null;
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
              })
            .filter(album => album !== null))
            }
          }
        
      })
      .catch(err => console.error('Spotify API search error:', err));
      
    return () => { cancel = true; };
  }, [search, accessToken]);

 

  return (
    <>
    <div className="searchi-container">
    <div className="icon-div"
             onClick={() => handleHomeCLick()}>
                <ChevronLeft size={25} id="less-icon" />
      </div>
      <div className="search-input">
      <Search size={20} id="search-icon"/>
      <input 
        type="search"
        placeholder="What do you want to listen to?"
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
        </div>
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
    {search && <span className='span'>Playlists</span> }
    <div className="playlist-search">
      
      {searchPlaylists.slice(0,4).map(playlist => (
        <SearchPlaylists playlist={playlist} key={playlist.uri} chooseTrack={chooseTrack}/>
      ))}
    </div>
    </>
  );
}