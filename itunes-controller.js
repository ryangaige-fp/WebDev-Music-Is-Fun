function ItunesController() {
  // PRIVATE
  const itunesService = new ItunesService();

  function drawSongs(songs) {
    //YOUR CODING STARTS HERE
    let template = "";

    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      template += `

     
         
            <div class="row d-inline-block p-4 thirds">
        
              <div class="card text-center zoom">
                <img class="card-img-top" src="${
                  song.albumArt
                }" alt="Card image cap">
                <div class="songContainer">
                <h5 class="card-title" pt-2>${song.artist}</h5>
                <p class="card-text">${song.title}</p>
                <p class="card-text">${song.collection}</p>
                <p class="card-text">${song.price}</p> 
                </div>
                <audio controls id="myTune"><source src="${
                  song.preview
                }" type="audio/mpeg">
                </audio>
              </div>
        
          </div>
      
  

        `;
    }
    document.getElementById("songs").innerHTML = template;

    //this event listener pauses the music when another play button is pressed
    document.addEventListener(
      "play",
      function(pause) {
        let audio = document.getElementsByTagName("audio");
        for (var i = 0, len = audio.length; i < len; i++) {
          if (audio[i] != pause.target) {
            audio[i].pause();
          }
        }
      },
      true
    );

    console.log(songs);
  }
  // getMusicByArtist.reset();

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
