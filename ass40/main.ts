type MusicAlbum = {
  artistName : string;
  albumTitle : string;
  noOfTracks? : number
}


function makeAlbum (artist_name : string, album_title :string, no_of_tracks? : number) : MusicAlbum {
  const music_album : MusicAlbum= {
    artistName : artist_name,
    albumTitle : album_title
  }
  if (no_of_tracks){
    music_album.noOfTracks = no_of_tracks;
  }
  return music_album;
}

console.log(makeAlbum("Nusrat fateh ali khan", "Mustt Mustt"));
 
console.log(makeAlbum("Nazia Hassan", "Disco Deewane", 21));
 
console.log(makeAlbum("Junoon", "Azadi"));
 