function ItunesService() {
  //DO NOT MODIFY
  this.getMusicByArtist = function(artist) {
    let url1 = "//bcw-getter.herokuapp.com/?url=";
    let url2 = "https://itunes.apple.com/search?term=" + artist;
    let apiUrl = url1 + encodeURI(url2);

    //Casts each object to
    return $.getJSON(apiUrl).then(function(response) {
      var songList = response.results.map(song => {
        return {
          title: song.trackName,
          albumArt: song.artworkUrl60.replace(/60x60/g, "250x250"),
          artist: song.artistName,
          collection: song.collectionName,
          price: song.collectionPrice,
          preview: song.previewUrl
        };
      });
      return songList;
    });
  };

  // this.getMusicByArtist = function (artist) {
  //   var url = 'https://itunes.apple.com/search?term=' + artist + "&callback=?"
  //   //Casts each object to
  //   return $.getJSON(url).then(function (response) {
  //     var songList = response.results.map(song => {
  //       return {
  //         title: song.trackName,
  //         albumArt: song.artworkUrl60.replace(/60x60/g, "250x250"),
  //         artist: song.artistName,
  //         collection: song.collectionName,
  //         price: song.collectionPrice,
  //         preview: song.previewUrl,
  //       }
  //     })
  //     return songList;
  //   })
  // }
}
