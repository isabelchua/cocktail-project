import { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import Header from "../components/Header";
import Layout from "./../components/Layout";
import { cocktailData } from "../data/cocktailData";
import banner from "../assets/img/banner.jpg";
import Tags from "../components/Tags";
// import { Search } from "./Search";

function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [tags, setTags] = useState([]);

	const handleSearch = term => {
		setSearchTerm(term);
	};

	// const handleSearch = term => {
	// 	setSearchTerm(term);
	// 	// onSearch(term);
	// };

	// useEffect(() => {
	// 	// Update tags when the component mounts or when the searchTerm changes
	// 	const mostCommonIngredients = getMostCommonFirstIngredients();
	// 	setTags(mostCommonIngredients);
	// }, [searchTerm]);

	// const getMostCommonFirstIngredients = () => {
	// 	const ingredientCounts = {};

	// 	// Count occurrences of first ingredients
	// 	cocktailData.forEach(cocktail => {
	// 		const firstIngredient =
	// 			cocktail.ingredients.length > 0
	// 				? cocktail.ingredients[0].ingredient
	// 				: "";
	// 		if (firstIngredient) {
	// 			ingredientCounts[firstIngredient] =
	// 				(ingredientCounts[firstIngredient] || 0) + 1;
	// 		}
	// 	});

	// 	// Sort ingredients by count in descending order
	// 	const sortedIngredients = Object.keys(ingredientCounts).sort(
	// 		(a, b) => ingredientCounts[b] - ingredientCounts[a]
	// 	);

	// 	const topIngredients = sortedIngredients.slice(0, 5);

	// 	return topIngredients;
	// };

	// const handleTagClick = clickedTag => {
	// 	setSearchTerm(clickedTag);
	// 	console.log(clickedTag);
	// 	onSearch(clickedTag);
	// };

	return (
		<Layout>
			<Header onSearch={handleSearch} />

			<div className="banner">
				<img src={banner} />
			</div>
			<CocktailList searchTerm={searchTerm} cocktails={cocktailData} />
		</Layout>
	);
}

export default Home;
