import { Search } from "./Search";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import CocktailList from "../components/CocktailList";
import { cocktailData } from "../data/cocktailData";
import Tags from "../components/Tags";

function Header({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [tags, setTags] = useState([]);

	const location = useLocation();

	const isCocktailPage = location.pathname.includes("/cocktail/");
	const shouldRenderSearch = !isCocktailPage;

	const handleSearch = term => {
		setSearchTerm(term);
		onSearch(term);
	};

	useEffect(() => {
		// Update tags when the component mounts or when the searchTerm changes
		const mostCommonIngredients = getMostCommonFirstIngredients();
		setTags(mostCommonIngredients);
	}, [searchTerm]);

	const getMostCommonFirstIngredients = () => {
		const ingredientCounts = {};

		// Count occurrences of first ingredients
		cocktailData.forEach(cocktail => {
			const firstIngredient =
				cocktail.ingredients.length > 0
					? cocktail.ingredients[0].ingredient
					: "";
			if (firstIngredient) {
				ingredientCounts[firstIngredient] =
					(ingredientCounts[firstIngredient] || 0) + 1;
			}
		});

		// Sort ingredients by count in descending order
		const sortedIngredients = Object.keys(ingredientCounts).sort(
			(a, b) => ingredientCounts[b] - ingredientCounts[a]
		);

		const topIngredients = sortedIngredients.slice(0, 5);

		return topIngredients;
	};

	const handleTagClick = clickedTag => {
		setSearchTerm(clickedTag);
		console.log(clickedTag);
		onSearch(clickedTag);
	};

	const handleInputChange = event => {
		const value = event.target.value;
		setSearchTerm(value);
		onSearch(value);
	};

	const handleClear = () => {
		setSearchTerm("");
	};

	return (
		<>
			<div className="header">
				<h1>
					<Link to={`/`}>Cocktail Project</Link>
				</h1>
				{/* {shouldRenderSearch && <Search onSearch={handleSearch} />} */}

				<div>
					{/* <Search onSearch={handleSearch} /> */}
					{/* <Tags tags={searchTerm} /> */}
					Search
					<input
						type="text"
						placeholder="Search cocktails"
						value={searchTerm}
						onChange={handleInputChange}
					/>
					<button onClick={handleClear}>clear</button>
					<div>
						{searchTerm && (
							<small>Search results for: {searchTerm}</small>
						)}
					</div>
				</div>
			</div>
			<div className="nav">
				<div>
					<Link to={`/`}>Home</Link> | <Link to={`/blog`}>Blog</Link> |{" "}
					<Link to={`/about`}>About</Link>{" "}
				</div>
				<div>
					<div>
						<h4>
							Tags
							{tags.map(tag => (
								<button key={tag} onClick={() => handleTagClick(tag)}>
									{tag}
								</button>
							))}
						</h4>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
