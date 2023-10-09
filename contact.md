---
layout: default
title: "Contact"
description: "Contact me here"
---
{% include navbar.html %}
<div class="container mt-5">
	<h2 class="mb-4" style="font-weight: 900;">CONTACT ME</h2>
	<p class="mb-4">Pick a card, any card.</p>
	<div class="row">
		{% include contact_link.html icon="fa-envelope" label="Email" href="mailto:mysterypancake1@gmail.com" color="#002769" %}
		{% include contact_link.html icon="fa-linkedin" label="LinkedIn" href="https://www.linkedin.com/in/hallamr/" color="#0966C2" %}
		{% include contact_link.html icon="fa-github" label="GitHub" href="https://github.com/MysteryPancake" color="#6739ac" %}
	</div>
	<div class="row">
		{% include contact_link.html icon="fa-twitter" label="Twitter" href="https://twitter.com/MysteryPancake1" color="#1DA1F2" %}
		{% include contact_link.html icon="fa-youtube-play" label="YouTube" href="https://www.youtube.com/mysterypancake" color="#A90000" %}
		{% include contact_link.html icon="fa-vimeo" label="Vimeo" href="https://vimeo.com/mysterypancake" color="#00a7cc" %}
	</div>
	<div class="row">
		{% include contact_link.html icon="fa-code" label="ShaderToy" href="https://www.shadertoy.com/user/MysteryPancake/sort=love" color="#383838" %}
		{% include contact_link.html icon="fa-cube" label="Sketchfab" href="https://sketchfab.com/mysterypancake" color="#1EA9D9" %}
		{% include contact_link.html icon="fa-steam" label="Steam" href="https://steamcommunity.com/id/mysterypancake" color="#1b2838" %}
	</div>
</div>