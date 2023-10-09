---
layout: default
title: "Contact"
description: "Contact me here"
---
{% include navbar.html %}
<div class="container mt-5">
	<h2 class="mb-4" style="font-weight: 900;">CONTACT ME</h2>
	<p class="mb-4">
		<span>Feel free to contact me on any of these websites, though I'm more likely to reply by email at </span>
		<img src="/assets/icons/email.png" height="18">
	</p>
	<div class="row">
		{% include contact_link.html icon="fa-linkedin" label="LinkedIn" href="https://www.linkedin.com/in/hallamr/" color="#0966C2" %}
		{% include contact_link.html icon="fa-github" label="GitHub" href="https://github.com/MysteryPancake" color="#6739ac" %}
		{% include contact_link.html icon="fa-youtube-play" label="YouTube" href="https://www.youtube.com/mysterypancake" color="#A90000" %}
	</div>
	<div class="row">
		{% include contact_link.html icon="fa-twitter" label="Twitter" href="https://twitter.com/MysteryPancake1" color="#1DA1F2" %}
		{% include contact_link.html icon="fa-steam" label="Steam" href="https://steamcommunity.com/id/mysterypancake" color="#1b2838" %}
		{% include contact_link.html icon="fa-vimeo" label="Vimeo" href="https://vimeo.com/mysterypancake" color="#00a7cc" %}
	</div>
	<div class="row">
		{% include contact_link.html icon="fa-cube" label="Sketchfab" href="https://sketchfab.com/mysterypancake" color="#1EA9D9" %}
		{% include contact_link.html icon="fa-code" label="ShaderToy" href="https://www.shadertoy.com/user/MysteryPancake/sort=love" color="#383838" %}
		{% include contact_link.html icon="fa-stack-overflow" label="Stack Overflow" href="https://stackoverflow.com/users/6931415/mysterypancake" color="#c25d0a" %}
	</div>
</div>