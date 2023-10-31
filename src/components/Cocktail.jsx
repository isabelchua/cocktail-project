import { cocktailData } from "./../data/cocktailData";

function Cocktail() {
	return (
		<ul>
			{cocktailData.map((cocktail, index) => (
				<li key={index}>
					<h2>{cocktail.name}</h2>
					<p>Glass: {cocktail.glass}</p>
					<p>Ingredients:</p>
					<ul>
						{cocktail.ingredients.map((ingredient, i) => (
							<li key={i}>
								{ingredient.amount} {ingredient.unit}{" "}
								{ingredient.ingredient}
							</li>
						))}
					</ul>
					<p>Garnish: {cocktail.garnish}</p>
					<p>Preparation: {cocktail.preparation}</p>
				</li>
			))}
		</ul>
	);
}

export default Cocktail;
