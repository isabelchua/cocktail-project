import "./App.css";
import CocktailList from "./components/CocktailList";

import { cocktailData } from "./data/cocktailData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CocktailPage from "./pages/CocktailPage";
// import banner from "./assets/img/banner.jpg";
// import Header from "./components/Header";
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
