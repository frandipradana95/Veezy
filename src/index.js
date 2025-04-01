import Viewfy from "viewfy-core";
import App from "./pages";

globalThis.createElement = Viewfy.createElement;

Viewfy.render(<App />, document.getElementById("root"));
