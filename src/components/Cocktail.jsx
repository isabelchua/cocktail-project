import { cocktailData } from "./../data/cocktailData";
import highballImage from "./../assets/icons/highball.svg";
import margaritaImage from "./../assets/icons/margarita.svg";
import martiniImage from "./../assets/icons/martini.svg";
import oldFashionedImage from "./../assets/icons/oldFashion.svg";
import hurricaneImage from "./../assets/icons/hurricane.svg";
import champagnefluteImage from "./../assets/icons/champagneflute.svg";
import shotglassImage from "./../assets/icons/shotglass.svg";
import hotdrinkImage from "./../assets/icons/hotdrink.svg";

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

function Cocktail() {
	return (
		<ul>
			{cocktailData.map((cocktail, index) => (
				<li key={index} className="card">
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

					<div className="glass">
						{" "}
						{/* <img src={"./../assets/icons/" + cocktail.glass + ".svg"} /> */}
						{/* <img src={highballImage} alt="Highball Icon" /> */}
						<img
							src={glassImages[cocktail.glass]}
							alt={`${cocktail.glass} Icon`}
						/>
					</div>
				</li>
			))}
		</ul>
	);
}

export default Cocktail;
