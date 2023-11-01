import { cocktailData } from "./../data/cocktailData";
import highballImage from "./../assets/icons/highball.svg";
import margaritaImage from "./../assets/icons/margarita.svg";
import martiniImage from "./../assets/icons/martini.svg";
import oldFashionedImage from "./../assets/icons/oldFashion.svg";

const glassImages = {
	highball: highballImage,
	margarita: margaritaImage,
	martini: martiniImage,
	oldFashion: oldFashionedImage
};

function Cocktail() {
	return (
		<ul>
			{cocktailData.map((cocktail, index) => (
				<li key={index}>
					<h2>{cocktail.name}</h2>

					<h4>Ingredients:</h4>
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

					<p className="glass">
						{" "}
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
