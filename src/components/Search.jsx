import { useState } from "react";

export const Search = ({ onSearch, setSearchTerm }) => {
	//const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = event => {
		const value = event.target.value;
		setSearchTerm(value);
		onSearch(value);
	};

	return (
		<div>
			Search
			<input
				type="text"
				placeholder="Search cocktails"
				// value={value}
				onChange={handleInputChange}
			/>
			<div>
				{/* <small>
					{searchTerm && "displaying search for: " + searchTerm}
				</small>
				<br></br>
				<small>{searchTerm && "results found"}</small> */}
			</div>
		</div>
	);
};
