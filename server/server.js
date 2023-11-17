const express = require("express");
const fetch = require("node-fetch").default;
const cors = require("cors");
require("dotenv").config();

// app.use(express.json());

// app.use(cors());

const app = express();

// const corsOptions = {
// 	origin: "http://localhost:3001",
// 	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// 	credentials: true,
// 	optionsSuccessStatus: 204
// };

const { getJson } = require("serpapi");

// Enable CORS for all routes
app.use(cors());

app.get("/api/search-images", (req, res) => {
	const { name } = req.query + " cocktail";

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
