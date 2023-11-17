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

	const apiKey = import.meta.env.VITE_REACT_APP_IMAGE_KEY;

	useEffect(() => {
		if (cocktail) {
			setQuery(cocktail.name);
			// handleSearch();

			const fetchData = async () => {
				try {
					const serpApiUrl = `https://serpapi.com/search.json?q=margarita&hl=en&gl=us&engine=google_images&api_key=${apiKey}&location=United%20States`;

					const response = await fetch(serpApiUrl);

					if (!response.ok) {
						throw new Error("Failed to fetch data");
					}

					const json = await response.json();
					console.log(json);
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			};

			fetchData();
		}
	}, [cocktail?.name]);

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
