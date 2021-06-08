document.getElementById("search")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("boton").click();
    }
});


function buscar(){
  var input = document.getElementById("search");
  if (input.value=="friends"){
    window.open("friends.html", "_self");
  } if (input.value=="la casa de papel"){
    window.open("lcdp.html", "_self");
  } if (input.value=="greys anatomy"){
    window.open("greys.html", "_self");
  } if (input.value=="the vampire diaries"){
    window.open("tvd.html", "_self");
  } if (input.value=="peaky blinders"){
    window.open("peaky.html", "_self");
  } if (input.value=="breaking bad"){
    window.open("breaking.html", "_self");
  } if (input.value=="adventure time"){
    window.open("adventure.html", "_self");
  } if (input.value=="gossip girl"){
    window.open("gossip.html", "_self");
  } if (input.value=="harry potter"){
    window.open("harry.html", "_self");
  } if (input.value=="twilight"){
    window.open("twilight.html", "_self");
  } if (input.value=="titanic"){
    window.open("titanic.html", "_self");
  } if (input.value=="maze runner"){
    window.open("grownups.html", "_self");
  } if (input.value=="up"){
    window.open("up.html", "_self");
  } if (input.value=="a silent voice"){
    window.open("asv.html", "_self");
  } if (input.value=="the half of it"){
    window.open("thehalf.html", "_self");
  } if (input.value=="the pianist"){
    window.open("pianist.html", "_self");
  } else {
    alert("This page is not available yet.")
  }
}
