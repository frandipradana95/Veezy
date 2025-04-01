import Viewfy from "viewfy-core";
import App from "./pages";
import { setRenderer } from "./router";

globalThis.createElement = Viewfy.createElement;

// window.history.pushState({}, "", window.location.pathname);

Viewfy.render(<App />, document.getElementById("root"));
setRenderer(() => {
	Viewfy.render(<App />, document.getElementById("root"));
});
