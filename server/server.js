const express = require("express");
const fetch = require("node-fetch").default;
const cors = require("cors");
require("dotenv").config();

const app = express();

const { getJson } = require("serpapi");

// Enable CORS for all routes
// const corsOptions = {
// 	origin: "http://localhost:3000",
// 	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// 	credentials: true,
// 	optionsSuccessStatus: 204
// };

// app.use(cors(corsOptions));

app.use(cors());

app.get("/", (req, res) => {
	// Handle the root path request, if needed
	res.send("Hello, world!");
});

app.get("/api/search-images", (req, res) => {
	const { name } = req.query;

	if (!name) {
		return res.status(400).json({ error: "Missing query parameter: name" });
	}

	getJson(
		{
			engine: "google_images",
			q: name,
			location: "United States",
			api_key: process.env.VITE_REACT_APP_IMAGE_KEY
		},
		json => {
			// console.log(json);
			res.json(json);
		}
	);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
