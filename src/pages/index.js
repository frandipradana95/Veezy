import Viewfy from "viewfy-core";
import { Router } from "../router";
import { Login, Register } from "./auth";

Viewfy.createStyleGlobals({
	"*": {
		padding: 0,
		margin: 0,
		boxSizing: "border-box",
	},
	body: {
		fontFamily: "Arial, sans-serif",
		backgroundColor: "#f0f2f5",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		margin: 0,
	},
});

const routes = {
	"/": () => <Login />,
	"/register": () => <Register />,
};

const App = () => {
	return (
		<fragment>
			<Router routes={routes}></Router>
		</fragment>
	);
};

export default App;
