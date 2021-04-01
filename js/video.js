var video;
video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//video = document.querySelector(".video");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / 0.95;
	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 15;
	}
	console.log(video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false) {
		video.muted = true;
		console.log("muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		console.log("unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = (document.querySelector("#slider").value) / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
	console.log("Old School");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
	console.log("Original");
});
