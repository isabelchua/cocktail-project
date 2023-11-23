import highballImage from "./../assets/icons/highball.svg";
import margaritaImage from "./../assets/icons/margarita.svg";
import martiniImage from "./../assets/icons/martini.svg";
import oldFashionedImage from "./../assets/icons/oldFashion.svg";
import hurricaneImage from "./../assets/icons/hurricane.svg";
import champagnefluteImage from "./../assets/icons/champagneflute.svg";
import shotglassImage from "./../assets/icons/shotglass.svg";
import hotdrinkImage from "./../assets/icons/hotdrink.svg";
import { Link } from "react-router-dom";

const glassImages = {
	highball: highballImage,
	margarita: margaritaImage,
	martini: martiniImage,
	oldFashion: oldFashionedImage,
	hurricane: hurricaneImage,
	champagneflute: champagnefluteImage,
	shotglass: shotglassImage,
	hotdrink: hotdrinkImage
};

const CocktailList = ({ cocktails, searchTerm }) => {
	const filteredCocktails = cocktails.filter(cocktail => {
		const searchTermLower = searchTerm.toLowerCase();

		for (const key in cocktail) {
			if (Object.prototype.hasOwnProperty.call(cocktail, key)) {
				const value = cocktail[key];

				if (
					value &&
					typeof value === "string" &&
					value.toLowerCase().includes(searchTermLower)
				) {
					return true;
				}

				if (Array.isArray(value) && key === "ingredients") {
					for (const ingredient of value) {
						if (
							ingredient.ingredient &&
							ingredient.ingredient
								.toLowerCase()
								.includes(searchTermLower)
						) {
							return true;
						}
					}
				}
			}
		}

		return false;
	});

	const sortedCocktails = filteredCocktails.sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	return (
		<>
			<ul className="cocktail-list">
				{sortedCocktails.map((cocktail, index) => (
					<li key={index} className="card">
						<h2>{cocktail.name}</h2>
						<h4>Ingredients:</h4>
						<ul className="ingredients">
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
						<h4>Flavor: </h4> {cocktail.flavor}
						<h4>Strength: </h4> {cocktail.strength}
						<div className="learn-more">
							<u>
								<Link to={`/cocktail/${cocktail.name}`}>
									learn more
								</Link>
							</u>
						</div>
						<div className="glass">
							<img
								src={glassImages[cocktail.glass]}
								alt={`${cocktail.glass} Icon`}
							/>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default CocktailList;
