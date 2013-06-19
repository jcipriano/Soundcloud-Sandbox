$(function () {
  

   
  SC.initialize({
    client_id: "d240d346771040330de384710f896566"
  });
  
  /**
   * To get a user, track, playlist, group or app ID see documentation:
   * http://developers.soundcloud.com/docs/api/reference#resolve
   **/
  SC.get("/groups/8618/tracks", {limit: 100}, function(tracks){
    
    /**
     * Stream returns a soundmanager2 object:
     * http://www.schillmania.com/projects/soundmanager2/doc/
     **/
    SC.stream(tracks[Math.floor(Math.random()*100)].uri, function(sound){
      sound.play();
      console.log(sound);
    });
    
  });
  
});