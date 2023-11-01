import { cocktailData } from "./../data/cocktailData";
import highballImage from "./../assets/icons/highball.svg";
import martiniImage from "./../assets/icons/martini.svg";

const glassImages = {
	highball: highballImage,
	martini: martiniImage
	// Add more mappings for other glass types
};
function Cocktail() {
	return (
		<ul>
			{cocktailData.map((cocktail, index) => (
				<li key={index}>
					<h2>{cocktail.name}</h2>

					<p>Ingredients:</p>
					<ul>
						{cocktail.ingredients.map((ingredient, i) => (
							<li key={i}>
								{ingredient.amount} {ingredient.unit}{" "}
								{ingredient.ingredient}
							</li>
						))}
					</ul>

					<p>Preparation: {cocktail.preparation}</p>
					<p>
						{cocktail.garnish ? "Garnish: " : ""}
						{cocktail.garnish}
					</p>
					<p>
						Glass:{" "}
						{/* <img src={"./../assets/icons/" + cocktail.glass + ".svg"} /> */}
						{/* <img src={highballImage} alt="Highball Icon" /> */}
						<img
							src={glassImages[cocktail.glass]}
							alt={`${cocktail.glass} Icon`}
						/>
					</p>
				</li>
			))}
		</ul>
	);
}

export default Cocktail;
