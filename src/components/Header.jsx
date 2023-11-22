function Header() {
	return (
		<div className="header">
			<h1>
				<Link to={`/`}>List of Cocktails</Link>
			</h1>
			<Search onSearch={handleSearch} />
		</div>
	);
}

export default Header;
