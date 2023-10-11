---
layout: default
title: "Official"
description: "My real official website"
---
<script>
function play() {
	document.getElementById("music").play();
}

document.body.addEventListener("click", play);
</script>
<style>
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	background: url("{{ "/assets/official/img.jpg" | relative_url }}") no-repeat center center fixed; 
	background-size: 100% 100%;
}
</style>
<audio id="music" autoplay loop>
	<source src="{{ "/assets/official/music.ogg" | relative_url }}" type="audio/ogg">
	<source src="{{ "/assets/official/music.mp3" | relative_url }}" type="audio/mpeg">
</audio>