import "./App.css";
import Cocktail from "./components/Cocktail";
import { Search } from "./components/Search";
import banner from "./assets/img/banner.jpg";
import { useState } from "react";
import { cocktailData } from "./data/cocktailData";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = term => {
		setSearchTerm(term);
	};

	return (
		<div>
			<div className="header">
				<h1>List of Cocktails</h1>
				<Search onSearch={handleSearch} />
			</div>
			<div className="banner">
				<img src={banner} />
			</div>
			<Cocktail cocktails={cocktailData} searchTerm={searchTerm} />
		</div>
	);
}

export default App;
