import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

const CocktailPage = ({ cocktails }) => {
	const { name } = useParams();
	let cocktail = cocktails.find(c => c.name === name);
	const [images, setImages] = useState([]);
	const [jsonData, setJsonData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/api/search-images?name=${encodeURIComponent(
						cocktail.name
					)}%20cocktail%20drink`
				);
				const data = await response.json();
				setJsonData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		// fetchData();
	}, [cocktail.name]);

	if (!cocktail) {
		return <div>Cocktail not found</div>;
	}

	return (
		<Layout>
			<Header />
			<div className="cocktail-page">
				<div className="cocktail-details">
					<h2>{cocktail.name}</h2>
					{jsonData && jsonData.images_results && (
						<div>
							<div>
								<img
									src={jsonData.images_results[0].thumbnail}
									alt="Thumbnail"
									style={{
										width: "200px",
										height: "200px",
										margin: "5px"
									}}
								/>
								{/* {jsonData.images_results.map((result, index) => (
							<img
								key={index}
								src={result.thumbnail}
								alt={`Thumbnail ${index}`}
								style={{
									width: "100px",
									height: "100px",
									margin: "5px"
								}}
							/>
						))} */}
							</div>
						</div>
					)}

					<ul>
						{cocktail.ingredients.map((ingredient, i) => (
							<li key={i}>
								{ingredient.amount} {ingredient.unit}{" "}
								{ingredient.ingredient}
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
				</div>

				<Link to={`/`}>Back to cocktail list</Link>
			</div>
		</Layout>
	);
};

export default CocktailPage;
