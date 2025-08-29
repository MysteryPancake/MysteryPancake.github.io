---
layout: default
title: "Contact"
description: "Contact me here"
---
{% include navbar.html %}

<div class="container mt-5">
	<h2 class="mb-4" style="font-weight: 900;">CONTACT ME</h2>
	<p class="mb-4">
		<span>Feel free to contact me below, though I'm more likely to reply via email at </span>
		<img src="{{ "/assets/icons/email.png" | relative_url }}" height="18">
	</p>
	<div class="row mx-0">
		{% include contact_link.html icon="fa-linkedin" label="LinkedIn" href="https://www.linkedin.com/in/hallamr/" color="#0966C2" %}
		{% include contact_link.html icon="fa-github" label="GitHub" href="https://github.com/MysteryPancake" color="#6739ac" %}
		{% include contact_link.html icon="fa-youtube-play" label="YouTube" href="https://www.youtube.com/mysterypancake" color="#A90000" %}
	</div>
	<div class="row mx-0">
		{% include contact_link.html icon="fa-twitter" label="Twitter" href="https://twitter.com/MysteryPancake1" color="#1DA1F2" %}
		{% include contact_link.html icon="fa-steam" label="Steam" href="https://steamcommunity.com/id/mysterypancake" color="#1b2838" %}
		{% include contact_link.html icon="fa-vimeo" label="Vimeo" href="https://vimeo.com/mysterypancake" color="#00a7cc" %}
	</div>
	<div class="row mx-0">
		{% include contact_link.html icon="fa-cube" label="Sketchfab" href="https://sketchfab.com/mysterypancake" color="#1EA9D9" %}
		{% include contact_link.html icon="fa-code" label="ShaderToy" href="https://www.shadertoy.com/user/MysteryPancake/sort=love" color="#383838" %}
		{% include contact_link.html icon="fa-paint-brush" label="ArtStation" href="https://www.artstation.com/hallam" color="#24baff" %}
	</div>
	<div class="row mx-0">
		{% include contact_link.html icon="fa-google" label="Gumroad" href="https://mysterypancake.gumroad.com/" color="#d943bb" %}
		{% include contact_link.html icon="fa-registered" label="The Rookies" href="https://www.therookies.co/u/MysteryPancake" color="#c49930" %}
		{% include contact_link.html icon="fa-stack-overflow" label="Stack Overflow" href="https://stackoverflow.com/users/6931415/mysterypancake" color="#e07726" %}
	</div>
	<div class="row mx-0">
		{% include contact_link.html icon="fa-instagram" label="Instagram" href="https://www.instagram.com/mysterypancake1/" color="#e6196e" %}
		{% include contact_link.html icon="fa-spotify" label="Spotify" href="https://open.spotify.com/artist/22nPt6CqMzobrJySt4CaxK" color="#13ae4a" %}
		{% include contact_link.html icon="fa-volume-up" label="Freesound" href="https://freesound.org/people/MysteryPancake/" color="#e60013" %}
	</div>
</div>
