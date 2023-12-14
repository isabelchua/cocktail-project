import "./App.css";
import { cocktailData } from "./data/cocktailData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CocktailPage from "./pages/CocktailPage";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					path="/cocktail/:name"
					element={<CocktailPage cocktails={cocktailData} />}
				/>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/blog" element={<BlogPage />} />
			</Routes>
		</Router>
	);
}

export default App;
