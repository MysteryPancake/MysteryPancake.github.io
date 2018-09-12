"use strict";

function request(url, func) {
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			func(this.responseText);
		}
	};
	request.send();
}

function addRepo(repo, div) {
	request(repo.url + "/readme", function(result) {
		var container = document.createElement("div");
		var content = window.atob(JSON.parse(result).content);
		var start = content.split("![Icon](")[1];
		if (start) {
			var match = start.split(")").shift();
			if (match && match !== "<ICON_PATH>?raw=true") {
				var url = document.createElement("a");
				url.href = repo.homepage || repo.html_url;
				var img = document.createElement("img");
				img.src = repo.html_url + "/blob/master/" + match;
				img.width = 72;
				img.height = 72;
				url.appendChild(img);
				container.appendChild(url);
			}
		}
		var link = document.createElement("a");
		link.href = repo.html_url;
		var title = document.createElement("h3");
		title.innerHTML = repo.name.replace(/-/g, " ");
		link.appendChild(title);
		container.appendChild(link);
		var description = document.createElement("p");
		description.innerHTML = repo.description.replace("(work in progress)", "");
		container.appendChild(description);
		var info = document.createElement("p");
		var language = document.createElement("span");
		language.innerHTML = repo.language;
		info.appendChild(language);
		var watchers = document.createElement("span");
		watchers.innerHTML = "👁" + repo.watchers_count;
		info.appendChild(watchers);
		var stars = document.createElement("span");
		stars.innerHTML = "⭐" + repo.stargazers_count;
		info.appendChild(stars);
		var forks = document.createElement("span");
		forks.innerHTML = "🔗" + repo.forks_count;
		info.appendChild(forks);
		container.appendChild(info);
		if (repo.has_pages && repo.homepage) {
			var frame = document.createElement("iframe");
			frame.src = repo.homepage;
			container.appendChild(frame);
		}
		div.appendChild(container);
	});
}

function setup() {
	request("https://api.github.com/users/MysteryPancake/repos", function(result) {
		var json = JSON.parse(result);
		var repos = {
			done: [],
			wip: []
		};
		for (var i = 0; i < json.length; i++) {
			if (json[i].description.indexOf("work in progress") === -1) {
				repos.done.push(json[i]);
			} else {
				repos.wip.push(json[i]);
			}
		}
		for (var j = 0; j < repos.done.length; j++) {
			addRepo(repos.done[j], document.getElementById("done"));
		}
		for (var k = 0; k < repos.wip.length; k++) {
			addRepo(repos.wip[k], document.getElementById("wip"));
		}
	});
}
