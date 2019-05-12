# my-first-pwa

A simple PWA showing some text and a cherry.

Firebase Demo: https://myawesomepwa-c87a1.firebaseapp.com

Github Demo: https://antigones.github.io/my-first-pwa/

To publish the sw to Github hosting, please change the following function in main.js:

```
if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/my-first-pwa/sw.js')
		.then(function() { console.log("Service Worker Registered"); });
}
```
Cherry icon by Vignesh P http://www.oviyanicons.com/

Text by Cupcake Ipsum​ http://www.cupcakeipsum.com/

