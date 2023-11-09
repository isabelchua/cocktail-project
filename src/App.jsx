import "./App.css";
import CocktailList from "./components/CocktailList";
import { Search } from "./components/Search";
import banner from "./assets/img/banner.jpg";
import { useState } from "react";
import { cocktailData } from "./data/cocktailData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CocktailPage from "./components/CocktailPage";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = term => {
		setSearchTerm(term);
	};

	return (
		<Router>
			<div>
				<div className="header">
					<h1>List of Cocktails</h1>
					<Search onSearch={handleSearch} />
				</div>
				<div className="banner">
					<img src={banner} />
				</div>
			</div>
			<Routes>
				<Route
					path="/"
					element={
						<CocktailList
							cocktails={cocktailData}
							searchTerm={searchTerm}
						/>
					}
				/>
				<Route
					path="/cocktail/:name"
					element={<CocktailPage cocktails={cocktailData} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
