"use strict";
function makeAlbum(artist_name, album_title, no_of_tracks) {
    var music_album = {
        artistName: artist_name,
        albumTitle: album_title
    };
    if (no_of_tracks) {
        music_album.noOfTracks = no_of_tracks;
    }
    return music_album;
}
console.log(makeAlbum("Nusrat fateh ali khan", "Mustt Mustt"));
console.log(makeAlbum("Nazia Hassan", "Disco Deewane", 21));
console.log(makeAlbum("Junoon", "Azadi"));
