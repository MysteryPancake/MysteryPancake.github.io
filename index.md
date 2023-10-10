---
layout: default
title: "Hallam Roberts"
description: "VFX, Motion Graphics and Coding"
---
{% include navbar.html fixed="true" %}

<div class="text-center d-flex align-items-center position-relative overflow-hidden" style="height: 75vh; background-color: black; box-shadow: 0 0 16px black">
	<canvas id="home_canvas" class="w-100 h-100 position-absolute"></canvas>
	<div class="w-100">
		<div>
			<span id="home_firstname" class="text-white position-relative" style="font-size: min(10vw, 7rem); font-weight: 200; text-shadow: 0 0 8px white;">Hallam </span>
			<span id="home_lastname" class="text-white position-relative" style="font-size: min(10vw, 7rem); font-weight: 200; text-shadow: 0 0 8px white;">Roberts</span>
		</div>
		<p id="home_description" class="text-white position-relative" style="font-size: min(4vw, 2.5rem); font-weight: 300;">VFX, Motion Graphics and Coding</p>
	</div>
</div>

<div class="container mt-5">
	<h2 class="mb-4" style="font-weight: 900;">ABOUT ME</h2>
	<div class="mb-5">
		<p>Welcome to my website! I'm a junior effects artist based in Sydney, Australia.</p>
		<p>Since 2012 I've been addicted to <a href="https://github.com/MysteryPancake/After-Effects-Fun" target="_blank">After Effects</a> and Photoshop, giving me lots of experience with motion graphics. Next I started messing with <a href="https://github.com/MysteryPancake/Blender-Fun" target="_blank">Blender</a> and got into programming. I did a Bachelor of Computer Science and <a href="https://www.blender.org/about/credits/" target="_blank">contributed to Blender's code</a> for a bit of fun. Since then I've been using <a href="https://github.com/MysteryPancake/Houdini-Fun" target="_blank">Houdini</a> for the Masters of Animation and Visualisation at UTS Animal Logic Academy.</p>
		<p>I also make <a href="https://www.shadertoy.com/user/MysteryPancake/sort=love" target="_blank">shaders</a> and <a href="https://open.spotify.com/artist/22nPt6CqMzobrJySt4CaxK" target="_blank">music</a> on the side!</p>
	</div>
	<h2 class="mb-4" style="font-weight: 900;">MY WORK</h2>
	{% include video_player.html title="Procedural Buildings" description="<p>This was the first time I tried procedural modelling in Houdini. I remade a bunch of Sydney landmarks and turned them into HDAs for easy animation. Around this time I was <a href=\"https://www.shadertoy.com/view/cdXSWj\" target=\"_blank\">making music on ShaderToy</a>, can you tell from the sine waves?</p><p>I rendered everything with Cycles in Blender, which was a total nightmare. I had to <a href=\"https://github.com/MysteryPancake/Houdini-Tools\" target=\"_blank\">write scripts</a> to fix Blender's geometry instancing and ended up redoing half of what I'd done in Houdini using Geometry Nodes.</p><p>I timed everything perfectly to the music, <a href=\"https://open.spotify.com/track/4NczzeHBQPPDO0B9AAmB8d\" target=\"_blank\">Assumptions by Sam Gellaitry</a>. This was surprisingly hard since I never made the setups with animation in mind.</p>" video_id="808257373" color="#342D62" %}
	{% include video_player.html title="Project 1 Trailer" description="<p>A sneak peak of my passion project that's been dragging on forever. Not learning from previous mistakes, I started in Blender before hitting the roadblock of hair simulation. Blender exploded and surrendered, so I had to bite the bullet. I ported everything to Houdini and learnt Solaris and Karma, then learnt how to do proper color management in After Effects.</p><p>I made everything in this trailer from scratch, except for the good looking artwork in the middle, which was done by <a href=\"https://www.linkedin.com/in/ben-poate-3923a4287/\">Ben Poate</a>. The animation was done using the Rokoko Motion Capture Suit at ALA, with cleanup done in Blender. I'm hoping to finish it by early 2024, so stay tuned!</p>" video_id="865207103" color="#1C1631" %}
	{% include video_player.html title="Procedural Shaders" description="<p>While learning Katana, I was surprised how fiddly Renderman shaders are for basic things like scaling a noise texture. Since Katana supports Open Shader Language, I <a href=\"https://github.com/MysteryPancake/Katana-OSL-Shaders\" target=\"_blank\">coded my own shaders</a> to make my life easier.</p><p>I got carried away and made a full raymarching engine in a shader, including the correct camera perspective. I used it to render all the fractals thanks to Inigo Quilez.</p><p>Although OSL shaders work in Katana, they don't in Karma. It doesn't have support for OSL scripts yet, so I had to render the fractals in Blender and reproject them back to Karma. Luckily Blender just got GPU support for OSL so it was wonderfully fast. Everything else was rendered in Karma.</p>" video_id="859756363" color="#492013" %}
	{% include video_player.html title="UTS Showreel" description="<p>A compilation of my best work before 2022, including a breakdown of some fun technical stuff. I made this to apply for the UTS Animal Logic Academy, and luckily they let me in.</p><p>Most of the 3D work was done in Blender, which I've used since 2015. I actually learnt Geometry Nodes before touching Houdini, which is a rare experience nowadays.</p><p>The cool looking geometry warping was done with edge split followed by vector refraction and reflection. It looks even cooler if you do it in a Houdini solver.</p>" video_id="765443818" color="#310953" %}
	{% include video_player.html title="From Memory" description="todo" video_id="302545077" color="#580D0F" %}
	{% include video_player.html title="Fake Caustics Tutorial" description="todo" video_id="C9iQKsShYIM" color="#04395F" youtube="true" %}
	{% include video_player.html title="Dynamic Machines Challenge" description="todo" video_id="PG-CNkrQEvY" color="#6C3F3B" youtube="true" %}
</div>

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

// From https://gist.github.com/NeptunKid/61c71f9469f531bb9c01
(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
			  timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());

function resize() {
	canvasElem.width = window.innerWidth;
	canvasElem.height = window.innerHeight * 0.75;
}

window.addEventListener("resize", resize);
window.addEventListener("orientationchange", resize);
resize();

// Lazy load iframe videos so the website doesn't take forever to load
const observer = new IntersectionObserver(function(entries, observer) {
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
	particles.push([Math.random() * window.innerWidth, Math.random() * window.innerHeight * 0.75, 0, 0, Math.random(), Math.floor(Math.random() * numParticles)]);
}

canvasElem.addEventListener("mousemove", function(e) {
	let randomParticle = particles[Math.floor(Math.random() * particles.length)];
	randomParticle[0] = e.clientX;
	randomParticle[1] = e.clientY;
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
		const xColor = Math.min(200, Math.floor(Math.abs(xDist * 0.3)));
		const yColor = Math.min(200, Math.floor(Math.abs(yDist * 0.3)));
		if (colorScheme) {
			canvasCtx.strokeStyle = `rgb(${xColor},0,${yColor})`;
		} else {
			canvasCtx.strokeStyle = `rgb(${xColor},${yColor},200)`;
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