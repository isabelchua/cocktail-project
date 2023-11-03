import "./App.css";
import Cocktail from "./components/Cocktail";
import { Search } from "./components/Search";

function App() {
	return (
		<div>
			<div className="header">
				<h1>List of Cocktails</h1>
				<Search />
			</div>
			<Cocktail />
		</div>
	);
}

export default App;
