function ItunesController() {
  // PRIVATE
  const itunesService = new ItunesService();

  function drawSongs(songs) {
    //YOUR CODING STARTS HERE
    let template = "";

    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      template += `

      <div class="container-fluid">
         <div class="row">
            <div class="col-3">
            <p>Title: ${song.title}</p>
            <img src="${song.albumArt}" alt="">
            <p>Artist: ${song.artist}</p>
            <p>Collection: ${song.collection}</p>
            <p>price: ${song.price}</p> 
            <audio controls><source src="${song.preview}" type="audio/mpeg">
            </audio>

          </div>
        </div>
    </div>

        `;
    }
    document.getElementById("songs").innerHTML = template;

    console.log(songs);
  }
  getMusicByArtist.reset();

  //PUBLIC
  //DO NOT MODIFY THIS METHOD
  this.getMusic = function(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $("#get-music-button").text("LOADING....");
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results);
      //changes button back to GET MUSIC once songs are loaded
      $("#get-music-button").text("GET MUSIC");
    });
  };
}
