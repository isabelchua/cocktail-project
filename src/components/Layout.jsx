import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
