import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getJson } from "serpapi";

const CocktailPage = ({ cocktails }) => {
	const { name } = useParams();
	let cocktail = cocktails.find(c => c.name === name);

	const [query, setQuery] = useState(cocktail ? cocktail.name : "");
	const [images, setImages] = useState([]);

	const KEY = import.meta.env.VITE_REACT_APP_IMAGE_KEY;

	const handleSearch = async () => {
		// try {
		// 	// const cx = "google_images";
		// 	const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${KEY}&searchType=image`;

		// 	const response = await axios.get(apiUrl);
		// 	setImages(response.data.items);
		// } catch (error) {
		// 	console.error("Error fetching images:", error);
		// 	console.error(
		// 		"Complete error object:",
		// 		error.response || error.request || error.message
		// 	);
		// }

		try {
			const response = await fetch(
				`https://serpapi.com/search.json?q=Coffee&hl=en&gl=us&engine=google_images&api_key=${KEY}`
			);

			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}

			const json = await response.json();
			setImages(json.images_results);
		} catch (error) {
			console.error("Error fetching images:", error);
		}
	};

	// useEffect(() => {
	// 	getJson(
	// 		{
	// 			q: searchTerm,
	// 			engine: "google_images",
	// 			ijn: "0",
	// 			api_key: KEY
	// 		},
	// 		json => {
	// 			setImages(json["images_results"]);
	// 		}
	// 	);
	// }, [cocktail?.name]);

	useEffect(() => {
		if (cocktail) {
			setQuery(cocktail.name);
			handleSearch();
		}
	}, [cocktail?.name]);

	// useEffect(() => {
	// 	if (cocktail) {
	// 		setQuery(cocktail.name);
	// 		handleSearch(); // Trigger search when the component mounts
	// 	}
	// }, [cocktail]);

	if (!cocktail) {
		return <div>Cocktail not found</div>;
	}

	return (
		<div className="cocktail-page">
			<h2>{cocktail.name}</h2>
			<ul>
				{cocktail.ingredients.map((ingredient, i) => (
					<li key={i}>
						{ingredient.amount} {ingredient.unit} {ingredient.ingredient}
					</li>
				))}
			</ul>

			<h4>Preparation: </h4>
			{cocktail.preparation}
			<h4>{cocktail.garnish ? "Garnish: " : ""}</h4>
			{cocktail.garnish}

			<div>
				{images.map(image => (
					<img key={image.link} src={image.link} alt={image.title} />
				))}
			</div>

			<Link to={`/`}>Back to cocktail list</Link>
		</div>
	);
};

export default CocktailPage;
