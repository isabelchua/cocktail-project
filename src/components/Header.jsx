import { Search } from "./Search";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = term => {
		setSearchTerm(term);
		onSearch(term);
	};

	return (
		<div className="header">
			<h1>
				<Link to={`/`}>List of Cocktails</Link>
			</h1>
			<div>
				<Search onSearch={handleSearch} />
				<small>displaying search for: `{searchTerm}`</small>
			</div>
		</div>
	);
}

export default Header;
