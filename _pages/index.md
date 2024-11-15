---
layout: default
title: "Home"
description: "Visual Effects, Motion Graphics and Programming"
permalink: /
---
{% include navbar.html fixed="true" %}

<div class="text-center d-flex align-items-center position-relative overflow-hidden" style="height: 75vh; background-color: black; box-shadow: 0 0 16px black">
	<canvas id="home_canvas" class="w-100 h-100 position-absolute"></canvas>
	<div class="w-100">
		<div>
			<span id="home_firstname" class="text-white position-relative" style="font-size: min(10vw, 7rem); font-weight: 200; text-shadow: 0 0 8px white;">Hallam </span>
			<span id="home_lastname" class="text-white position-relative" style="font-size: min(10vw, 7rem); font-weight: 200; text-shadow: 0 0 8px white;">Roberts</span>
		</div>
		<div id="home_description" class="text-white position-relative">
			<span style="font-size: min(4vw, 2.5rem); font-weight: 300;">FX | Motion Graphics | Programming</span>
			<div style="font-size: 3.5rem;">
				{% include footer_link.html icon="fa-linkedin" href="https://www.linkedin.com/in/hallamr/" %}
				{% include footer_link.html icon="fa-vimeo" href="https://vimeo.com/mysterypancake" %}
				{% include footer_link.html icon="fa-github" href="https://github.com/MysteryPancake" %}
			</div>
		</div>
	</div>
</div>

<div class="container mt-5">
	<h2 class="mb-4" style="font-weight: 900;">REEL</h2>
	<div style="padding: 56.25% 0 0 0;" class="position-relative mb-5">
		<iframe data-src="https://player.vimeo.com/video/892894967?title=0&byline=0&portrait=0&quality=1080p" class="position-absolute top-0 left-0 w-100 h-100 lazy-iframe" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
	</div>
	<h2 class="mb-4" style="font-weight: 900;">ABOUT ME</h2>
	<div class="mb-5">
		<p>Welcome to my website! I'm currently a Junior FX TD at ILM Sydney.</p>
		<p>I've been making videos online since 2012. I started off making motion graphics with <a href="https://github.com/MysteryPancake/After-Effects-Fun" target="_blank">After Effects</a>, <a href="https://github.com/MysteryPancake/Blender-Fun" target="_blank">Blender</a> and Photoshop. Next I got into coding and did a Bachelor of Computer Science. Later I started learning <a href="https://github.com/MysteryPancake/Houdini-Fun" target="_blank">Houdini</a>, and did a masters at UTS Animal Logic Academy.</p>
		<p>I like exploring <a href="http://github.com/MysteryPancake/Houdini-Fun" target="_blank">random topics in Houdini</a> and <a href="https://www.blender.org/about/credits/" target="_blank">working on Blender</a>. I also make <a href="https://www.shadertoy.com/user/MysteryPancake/sort=love" target="_blank">shaders</a> and <a href="https://open.spotify.com/artist/22nPt6CqMzobrJySt4CaxK" target="_blank">music</a> for fun, be sure to check it out!</p>
	</div>
	<h2 class="mb-4" style="font-weight: 900;">MY WORK</h2>
	{% include video_player.html title="Procedural Buildings" description="<p>This was the first time I tried procedural modelling in Houdini. I remade a bunch of Sydney landmarks and turned them into HDAs for easy control. Around this time I was making <a href=\"https://www.shadertoy.com/view/cdXSWj\" target=\"_blank\">music</a> on ShaderToy, maybe you can tell from the sine waves?</p><p>I rendered everything with Cycles in Blender, which was a challenge. I had to write <a href=\"https://github.com/MysteryPancake/Houdini-Tools\" target=\"_blank\">scripts</a> to fix Blender's instancing and remake a few Houdini setups using Geometry Nodes.</p><p>Everything is timed to the music, <a href=\"https://open.spotify.com/track/4NczzeHBQPPDO0B9AAmB8d\" target=\"_blank\">Assumptions by Sam Gellaitry</a>. I didn't make the setups with animation in mind, so it was tricky to sync.</p>" video_id="808257373" color="#342D62" %}
	{% include video_player.html title="Project 1 Trailer" description="<p>A sneak peak of an ongoing passion project I started in January. Not learning from past mistakes, I committed to Blender before hitting the roadblock of hair simulation. I had to bite the bullet and port everything to Houdini. I learnt Solaris, Karma and how to force After Effects to use color management.</p><p>I made everything in this trailer from scratch, except for the beautiful artwork in the middle drawn by <a href=\"https://www.linkedin.com/in/ben-poate-3923a4287/\" target=\"_blank\">Ben Poate</a>. The animation was done with a Rokoko Motion Capture Suit, with cleanup in Blender using <a href=\"https://blendermarket.com/products/animation-layers\" target=\"_blank\">Animation Layers</a>.</p>" video_id="865207103" color="#1C1631" %}
	{% include video_player.html title="Procedural Shaders" description="<p>While learning Katana, I was surprised how tedious Renderman shaders are for basic tasks like scaling a noise texture. Since Katana supports Open Shader Language, I wrote my own <a href=\"https://github.com/MysteryPancake/Katana-OSL-Shaders\" target=\"_blank\">shaders</a> to make life easier.</p><p>It was fun so I got carried away and wrote a raymarching engine in OSL. I used it to render all the fractals including the correct camera perspective.</p><p>My plan was to render everything in Karma. Sadly Karma doesn't support OSL scripts yet, so I rendered the fractals in Blender and reprojected them. Luckily Blender got GPU support for OSL so it was incredibly fast.</p>" video_id="859756363" color="#492013" %}
	{% include video_player.html title="UTS Showreel" description="<p>A compilation of my best work before 2022, including a technical breakdown. I made this to apply for the UTS Animal Logic Academy, and luckily they let me in!</p><p>Most of the 3D work was done in Blender. I learnt Geometry Nodes before touching Houdini, which is a rare experience nowadays.</p><p>I mainly used Edge Split and Vector Refract for the trippy warping effects. You can find the project files on my <a href=\"https://github.com/MysteryPancake/Blender-Fun\" target=\"_blank\">Blender</a> page if you're interested.</p>" video_id="765443818" color="#310953" %}
	{% include video_player.html title="Project Dynamo" description="<p><a href=\"https://www.linkedin.com/in/nathan-le-3a0241214/\" target=\"_blank\">Nathan Le</a> wanted to try compositing a CGI robot onto live action plates, so we went to Cockatoo Island. He found the robot model on <a href=\"https://skfb.ly/oBIMJ\" target=\"blank\">Sketchfab</a>, then rigged and animated it.</p><p>I tried rebuilding the environment with Gaussian Splatting and NeRFs, but our dataset was too small so I did it manually based on point clouds from <a href=\"https://github.com/colmap/colmap\" target=\"_blank\">COLMAP</a>. I also used Nuke's camera tracker for the first time.</p><p>I wanted to try a linear color workflow using <a href=\"https://github.com/EatTheFuture/image_tools\" target=\"_blank\">Ian Hubert's LUT Maker</a>, but we recorded in sRGB so it fell apart. <a href=\"https://www.linkedin.com/in/ruben-luzaic-4a4716239/\" target=\"_blank\">Ruben Luzaic</a> did a fantastic job matching the lighting manually.</p>" video_id="876371669" color="#523d23" %}
	{% include video_player.html title="From Memory" description="<p>An abstract piece I made for an art competition based on an image of hands playing with string. I finished it without leaving After Effects, using Trapcode Tao to generate the geometry.</p><p>I used CC Light Burst for the god rays, to add visual interest and give an ethereal feeling. I also used my favourite discontinued plugin, Hall of Mirrors by Red Giant. I <a href=\"https://www.shadertoy.com/view/dsSGWm\" target=\"_blank\">recreated</a> this plugin on ShaderToy if you want to try it yourself.</p>" video_id="302545077" color="#580D0F" %}
	{% include video_player.html title="Fake Caustics Tutorial" description="<p>A Blender tutorial I made using a <a href=\"https://medium.com/@evanwallace/rendering-realtime-caustics-in-webgl-2a99a29a0b2c\" target=\"_blank\">great technique</a> by Evan Wallace. It fakes caustics using pure geometry and runs in realtime in Eevee. I might revisit this since I only got 1 level of refraction to work.</p><p>Cycles now has proper caustic rendering for general cases, though it's not as fast as this method. I put my project files on <a href=\"https://mysterypancake.gumroad.com/\" target=\"_blank\">Gumroad</a>, and surprisingly people bought them. There's more tutorials in the works, so make sure to <a href=\"https://www.youtube.com/mysterypancake\" target=\"blank\">subscribe</a> for more!</p>" video_id="C9iQKsShYIM" color="#04395F" youtube="true" %}
	{% include video_player.html title="Dynamic Machines Challenge" description="<p>A short animation I made in Blender for <a href=\"https://youtu.be/b0-IkxXyhmY?t=5812\" target=\"_blank\">Clint's Dynamic Machines Challenge</a>. Though I didn't make the top 100, it was great fun and I learnt a lot. I only had a week to finish it due to my terrible planning.</p><p>The characters and assets are from <a href=\"https://store.steampowered.com/app/304430/INSIDE/\" target=\"_blank\">Inside by Playdead</a>. I wanted to make the blob creature roll around and smash through things like it does in game, but it turned into an Indiana Jones chase sequence.</p><p>I did the sound design in FL Studio using huge convolution reverb and <a href=\"https://freesound.org/people/MysteryPancake/packs/24648/\" target=\"_blank\">glass smashes</a> I recorded. For more info, check out the breakdown in my <a href=\"https://vimeo.com/765443818\" target=\"blank\">UTS Showreel</a>.</p>" video_id="PG-CNkrQEvY" color="#6C3F3B" youtube="true" %}
	{% include video_player.html title="Coffee Brake" description="<p>The first film we finished at UTS Animal Logic Academy. I worked on the coffee and spill surfacing, the explosion and flapping ties.</p><p>To automate the ties, I baked out looping caches from Houdini and made a <a href=\"https://github.com/MysteryPancake/Houdini-Tools\" target=\"_blank\">Blender addon</a> to strip the vertex weights, apply the Mesh Sequence Cache and rebake the Alembic. Overall it saved 50 shots of work. I released a version of this script for other departments to use, which saved another 15 shots of work.</p><p>The incredible speed of this film made some effects challenging. With Gary's unmatched power, the coffee kept clipping through the cup. Thankfully I learnt a fantastic stabilisation technique explained on my <a href=\"https://github.com/MysteryPancake/Houdini-Fun#smoke--fluids-fix-moving-colliders\" target=\"_blank\">Houdini page</a>.</p>" video_id="T57aCLYdX9M" color="#832469" youtube="true" %}
	{% include video_player.html title="Alone" description="<p>The final film we finished at UTS Animal Logic Academy. I worked on the plant watering, smoke sims and thrusters.</p><p>The watering was tricky since I couldn't get two way coupling to work. Ideally the plant and water would influence eachother, except the plant was Vellum and the fluid was POP.</p><p>I ended up transferring the POP velocity onto Vellum, then running another POP sim afterwards to get proper collisions with the leaves. I would've tried Vellum Fluid, but all the supervisors I talked to said it's much worse than FLIP.</p>" video_id="6vqREp6mFKs" color="#1e2140" youtube="true" %}
	{% include video_player.html title="Dave's First Day" description="<p>A student film many of us worked on outside of class at UTS Animal Logic Academy. Judisak Meng did a fantastic job at directing, it turned out just as good as Coffee Brake.</p><p>I worked on many different effects including cloth, mopping, coffee spilling, boxes falling and the planet exploding. It was great fun using the RBD Guide feature to prevent the boxes falling onto the button.</p><p>Although the planet was hit from the front, it looked better to spread out sideways. Setting the velocity didn't look good, so I used a sphere collider instead.</p>" video_id="Wt1uGI2jYAQ" color="#700f0f" youtube="true" %}
</div>

{% include footer.html %}

<script src="{{ "/assets/js/intersectionobserver_polyfill.js" | relative_url }}"></script>
<script src="{{ "/assets/js/requestframe_polyfill.js" | relative_url }}"></script>
<script>
const canvasElem = document.getElementById("home_canvas");
const canvasCtx = canvasElem.getContext("2d", { alpha: false });
const first = document.getElementById("home_firstname");
const last = document.getElementById("home_lastname");
const desc = document.getElementById("home_description");
const duration = 120;
let offset = duration;

// From https://easings.net
function easeOutQuart(x) {
	return x * x * x * x;
}

function resize() {
	canvasElem.width = window.innerWidth;
	canvasElem.height = window.innerHeight * 0.75;
}

window.addEventListener("resize", resize);
window.addEventListener("orientationchange", resize);
resize();

// Lazy load iframe videos so the website doesn't take forever to load
const observer = new window.IntersectionObserver(function(entries, observer) {
	entries.forEach(function(entry) {
		if (entry.isIntersecting) {
			entry.target.src = entry.target.getAttribute("data-src");
			observer.unobserve(entry.target);
		}
	});
});

const iframes = document.getElementsByClassName("lazy-iframe");
for (let i = 0; i < iframes.length; ++i) {
	observer.observe(iframes[i]);
}

const particles = [];
const numParticles = 320;
for (let i = 0; i < numParticles; ++i) {
	// X, Y, velocity X, velocity Y, speed, friend ID
	particles.push([Math.random() * canvasElem.width, Math.random() * canvasElem.height, 0, 0, Math.random(), Math.floor(Math.random() * numParticles)]);
}

canvasElem.addEventListener("mousemove", function(e) {
	let randomParticle = particles[Math.floor(Math.random() * particles.length)];
	randomParticle[0] = e.offsetX;
	randomParticle[1] = e.offsetY;
	randomParticle[2] = e.movementX * 0.3;
	randomParticle[3] = e.movementY * 0.3;
});

const moveOption = Math.random() > 0.5;
const textOption = Math.random() > 0.5;
const colorScheme = Math.random() > 0.5;

function draw() {
	// Update canvas
	for (let i = 0; i < particles.length; ++i) {
		let particle = particles[i];
		let oldX = particle[0];
		let oldY = particle[1];
		
		// Set velocity to move towards friend
		let friend = particles[particle[5]];
		const xDist = friend[0] - particle[0];
		const yDist = friend[1] - particle[1];

		// Two options for movement, not sure which is my favourite so use both
		if (moveOption) {
			// Regular distance
			particle[2] += xDist * 0.001 * (0.01 + particle[4] * 0.1);
			particle[3] += yDist * 0.001 * (0.01 + particle[4] * 0.1);
		} else {
			// Normalised distance
			particle[2] += Math.sign(xDist) * (0.01 + particle[4] * 0.05);
			particle[3] += Math.sign(yDist) * (0.01 + particle[4] * 0.05);
		}
		
		// Dampen velocity
		particle[2] *= 0.995;
		particle[3] *= 0.995;

		// Add velocity to position
		particle[0] += particle[2];
		particle[1] += particle[3];

		// Wrap position
		if (particle[0] < 0) {
			particle[0] = canvasElem.width;
			oldX = particle[0];
		} else if (particle[0] > canvasElem.width) {
			particle[0] = 0;
			oldX = particle[0];
		}
		if (particle[1] < 0) {
			particle[1] = canvasElem.height;
			oldY = particle[1];
		} else if (particle[1] > canvasElem.height) {
			particle[1] = 0;
			oldY = particle[1];
		}

		// Draw line
		const xColor = Math.floor(Math.abs(xDist * 0.3));
		const yColor = Math.floor(Math.abs(yDist * 0.3));
		if (colorScheme) {
			canvasCtx.strokeStyle = `rgb(${xColor},0,${yColor})`;
		} else {
			canvasCtx.strokeStyle = `rgb(${xColor},${yColor},255)`;
		}
		canvasCtx.lineWidth = Math.min(512, 2 / particle[4]);
		canvasCtx.beginPath();
		canvasCtx.moveTo(oldX, oldY);
		canvasCtx.lineTo(particle[0], particle[1]);
		canvasCtx.stroke();
	}

	// Fade trails over time
	canvasCtx.fillStyle = "black";
	canvasCtx.globalAlpha = 0.012;
	canvasCtx.fillRect(0, 0, canvasElem.width, canvasElem.height);
	canvasCtx.globalAlpha = 1.0;

	// Move name labels
	if (offset > 0) {
		const eased = easeOutQuart(offset / duration);
		// Two options for movement, not sure which is my favourite so use both
		if (textOption) {
			// Up and down
			const pixels = `${eased * window.innerHeight * 0.5}px`;
			first.style.top = pixels;
			last.style.bottom = pixels;
		} else {
			// Left and right
			const pixels = `${eased * window.innerWidth * 0.5}px`;
			first.style.right = pixels;
			last.style.left = pixels;
		}
		offset--;
		desc.style.top = `${eased * 64}px`;
		desc.style.opacity = 1 - offset / duration;
	}
	window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
</script>