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
				<small>
					{searchTerm && "displaying search for: " + searchTerm}
				</small>
				<br></br>
				<small>{searchTerm && "results found"}</small>
			</div>
		</div>
	);
}

export default Header;
