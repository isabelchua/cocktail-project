import "./App.css";
import Cocktail from "./components/Cocktail";
import { Search } from "./components/Search";
import banner from "./assets/img/banner.jpg";

function App() {
	return (
		<div>
			<div className="header">
				<h1>List of Cocktails</h1>
				<Search />
			</div>
			<div className="banner">
				<img src={banner} />
			</div>
			<Cocktail />
		</div>
	);
}

export default App;
