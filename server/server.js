const express = require("express");
// const fetch = require("node-fetch");
const fetch = require("node-fetch").default;

// import fetch from "node-fetch";
// import express from "express";

require("dotenv").config();

const app = express();
const port = 3001;
// const apiKey = import.meta.env.VITE_REACT_APP_IMAGE_KEY;
const apiKey = process.env.VITE_REACT_APP_IMAGE_KEY;

app.use(express.json());

app.get("/search", async (req, res) => {
	const serpApiUrl = `https://serpapi.com/search.json?q=margarita&hl=en&gl=us&engine=google_images&api_key=${apiKey}&location=United%20States`;

	try {
		const response = await fetch(serpApiUrl);
		const data = await response.json();
		res.json(data);
	} catch (error) {
		console.error("Error proxying request:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
	res.send("Hello, this is your server!");
});

app.get("/search", async (req, res) => {
	const apiKey = process.env.VITE_REACT_APP_IMAGE_KEY;
	const serpApiUrl = `https://serpapi.com/search.json?q=margarita&hl=en&gl=us&engine=google_images&api_key=${apiKey}&location=United%20States`;

	try {
		const response = await fetch(serpApiUrl);
		const data = await response.json();
		res.json(data);
	} catch (error) {
		console.error("Error proxying request:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

/////
