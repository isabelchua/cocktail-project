import { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import Header from "../components/Header";
import Layout from "./../components/Layout";
import { cocktailData } from "../data/cocktailData";
// import { Search } from "./Search";

function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	// const [tags, setTags] = useState([]);

	const handleSearch = term => {
		setSearchTerm(term);
	};

	return (
		<Layout>
			<Header onSearch={handleSearch} />

			<CocktailList searchTerm={searchTerm} cocktails={cocktailData} />
		</Layout>
	);
}

export default Home;
