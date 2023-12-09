import { cocktailData } from "../data/cocktailData";
import { useState, useEffect } from "react";

const Tags = () => {
	const [tags, setTags] = useState([]);

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
		<div>
			Tags - tags component
			{tags.map(tag => (
				<button key={tag} onClick={() => handleTagClick(tag)}>
					{tag}
				</button>
			))}
			<p>Search results for: {searchTerm}</p>
		</div>
	);
};

export default Tags;
