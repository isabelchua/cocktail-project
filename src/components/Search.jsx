import { useState } from "react";

export const Search = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = event => {
		const value = event.target.value;
		setSearchTerm(value);
		onSearch(value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Search cocktails"
				value={searchTerm}
				onChange={handleInputChange}
			/>
		</div>
	);
};
