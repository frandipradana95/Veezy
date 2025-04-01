import { Router } from "../router";
import { Login, Register } from "./auth";

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
