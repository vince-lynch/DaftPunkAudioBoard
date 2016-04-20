document.addEventListener("DOMContentLoaded", function(event){
var WhichTILE = 17;
 var TileHover = document.getElementsByClassName("Tile");

// play audio function
  var playSound = function(WhichTILE) {

document.getElementsByTagName("audio")[WhichTILE].play()

}
  for (var i=0;i<TileHover.length;i++) {

    TileHover[i].addEventListener("mouseover", function( event){
    console.log(this.id);
    WhichTILE = this.id;

    playSound(WhichTILE)

    });
  }

});


// adds audio element as variable
/*

var audio = document.getElementsbyTagName('audio')[0];
*/
/*
built in functions for audio in javascript as OBJECTs
audio.play()
audio.pause()
audio.currentTime // will return the current time of where thetrack is at
so if you 
audio.currentTime = 0
then you set the current time back to the start.

/ can tell us, what audio type is supported on their computer
audio.canPlayType("audio/ogg")
audio.canPlayType("audio/mp3")


So now we can take the default controls off. and instead create our own buttons and control it using javascript
*/

/*
Work it harder, make it better
Do it faster, makes us stronger
More than ever, hour after
Our work is never over
*/




/* var audio = document.getElementsByTagName("audio")[0];*/


/*
Work it harder, make it better
Do it faster, makes us stronger
More than ever, hour after
Our work is never over
*/
/* var WorkIt = document.getElementById("WorkIt");
 var Harder = document.getElementById("Harder");
 var MakeIt = document.getElementById("MakeIt");
 var Better = document.getElementById("Better");
 var DoIt = document.getElementById("DoIt");
 var Faster = document.getElementById("Faster");
 var MakesUs = document.getElementById("MakesUs");
 var Stronger = document.getElementById("Stronger");
 var MoreThan = document.getElementById("MoreThan");
 var Ever = document.getElementById("Ever");
 var Hour = document.getElementById("Hour");
 var After = document.getElementById("After");
 var Our = document.getElementById("Our");
 var WorkIs = document.getElementById("WorkIs");
 var Never = document.getElementById("Never");
var Over = document.getElementById("Over");*/


/*var WorkIt = document.getElementsByTagName("audio")[0];
 var Harder = document.getElementsByTagName("audio")[1];
 var MakeIt = document.getElementsByTagName("audio")[2];
 var Better = document.getElementsByTagName("audio")[3];
 var DoIt = document.getElementsByTagName("audio")[4];
 var Faster = document.getElementsByTagName("audio")[5];
 var MakesUs = document.getElementsByTagName("audio")[6];
 var Stronger = document.getElementsByTagName("audio")[7];
 var MoreThan = document.getElementsByTagName("audio")[8];
 var Ever = document.getElementsByTagName("audio")[9];
 var Hour = document.getElementsByTagName("audio")[10];
 var After = document.getElementsByTagName("audio")[11];
 var Our = document.getElementsByTagName("audio")[12];
 var WorkIs = document.getElementsByTagName("audio")[13];
 var Never = document.getElementsByTagName("audio")[14];
var Over = document.getElementsByTagName("audio")[15];
*/
