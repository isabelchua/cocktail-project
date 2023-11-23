import "./App.css";
import { cocktailData } from "./data/cocktailData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CocktailPage from "./pages/CocktailPage";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					path="/cocktail/:name"
					element={<CocktailPage cocktails={cocktailData} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
