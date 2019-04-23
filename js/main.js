
/*  register service worker */
if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/my-first-pwa/sw.js')
		.then(function() { console.log("Service Worker Registered"); });
}

fetch('content.json')
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		document.getElementById("the-title").innerHTML = data[0].title;
		document.getElementById("the-content").innerHTML = data[0].text;
	})
	.catch(function(error){
		alert('error : '+ error);
	})



