const express = require("express");
const fetch = require("node-fetch").default;

require("dotenv").config();

const app = express();
const port = 3001;

app.use(express.json());

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

// Start the server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
