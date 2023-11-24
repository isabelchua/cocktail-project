import { Search } from "./Search";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState("");

	const location = useLocation();

	const isCocktailPage = location.pathname.includes("/cocktail/");
	const shouldRenderSearch = !isCocktailPage;

	const handleSearch = term => {
		setSearchTerm(term);
		onSearch(term);
	};

	return (
		<>
			<div className="header">
				<h1>
					<Link to={`/`}>Cocktail Project</Link>
				</h1>
				{shouldRenderSearch && <Search onSearch={handleSearch} />}
			</div>
			<h3>Tags</h3>
		</>
	);
}

export default Header;
