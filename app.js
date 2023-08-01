const express = require ('express');
const app = express ();

app.get('/home', (request, response)=>{
    response.sendFile(__dirname + '/views/home-page.html')
});

app.get('/abour', (request, response)=>{
    response.sendFile(__dirname + '/views/about-page.html')
});

app.get('/works', (request, response)=>{
    response.sendFile(__dirname + '/views/works-page.html')
});

app.get('/photo-gallery', (request, response)=>{
    response.sendFile(__dirname + '/views/photo-gallery-page.html')
});