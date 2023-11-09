import { useParams } from "react-router-dom";

const CocktailPage = ({ cocktails }) => {
	const { name } = useParams();
	const cocktail = cocktails.find(cocktail => cocktail.name === name);

	if (!cocktail) {
		return <div>Cocktail not found</div>;
	}

	return (
		<div>
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
		</div>
	);
};

export default CocktailPage;
