//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let loading = document.createElement("div");
loading.id = "loading";
loading.innerText = "Loading...";
output.appendChild(loading);


// Promise 1
let promise1 = new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = () => {
        resolve(images[0].url);
    };

    img.onerror = () => {
        reject(new Error("Image 1 failed to download"));
    };

    img.src = images[0].url;
});


// Promise 2
let promise2 = new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = () => {
        resolve(images[1].url);
    };

    img.onerror = () => {
        reject(new Error("Image 2 failed to download"));
    };

    img.src = images[1].url;
});


// Promise 3
let promise3 = new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = () => {
        resolve(images[2].url);
    };

    img.onerror = () => {
        reject(new Error("Image 3 failed to download"));
    };

    img.src = images[2].url;
});


// Wait for all promises
Promise.all([promise1, promise2, promise3])
    .then((data) => {

        // Remove loading
        loading.remove();

        // Display images
        output.innerHTML += `
            <img src="${data[0]}">
            <img src="${data[1]}">
            <img src="${data[2]}">
        `;

    })
    .catch((e) => {

        // Remove loading
        loading.remove();

        // Show error
        let error = document.createElement("div");
        error.id = "error";
        error.innerText = e.message;

        output.appendChild(error);
    });