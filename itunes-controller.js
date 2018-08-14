function ItunesController() {

  // PRIVATE
  const itunesService = new ItunesService()

  function drawSongs(results) {
    console.log(results)
    //YOUR CODING STARTS HERE



  }

  //PUBLIC
  //DO NOT MODIFY THIS METHOD
  this.getMusic = function (e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}

