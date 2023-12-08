import { useState } from "react";
import CocktailList from "../components/CocktailList";
import Header from "../components/Header";
import Layout from "./../components/Layout";
import { cocktailData } from "../data/cocktailData";
import banner from "../assets/img/banner.jpg";
import Tags from "../components/Tags";

function Home() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = term => {
		setSearchTerm(term);
	};

	return (
		<Layout>
			<Header onSearch={handleSearch} />
			{/* <Tags /> */}
			<div className="banner">
				<img src={banner} />
			</div>
			<CocktailList searchTerm={searchTerm} cocktails={cocktailData} />
		</Layout>
	);
}

export default Home;
