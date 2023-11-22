import "./App.css";
import CocktailList from "./components/CocktailList";
import { Search } from "./components/Search";
import { useState } from "react";
import { cocktailData } from "./data/cocktailData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CocktailPage from "./components/CocktailPage";
import { Link } from "react-router-dom";
import banner from "./assets/img/banner.jpg";
import Header from "./components/Header";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = term => {
		setSearchTerm(term);
	};

	return (
		<Router>
			<Header />
			<div className="header">
				<h1>
					<Link to={`/`}>List of Cocktails</Link>
				</h1>
				<Search onSearch={handleSearch} />
			</div>
			<div className="banner">
				<img src={banner} />
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
