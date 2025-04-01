import Viewfy from "viewfy-core";
let renderer = () => {};

const urlPath = Viewfy.createStore({
	currentPath: window.location.pathname,
});

export const Router = ({ routes }) => {
	let { currentPath } = urlPath.getState();
	// Update state saat URL berubah
	const routeChange = () => {
		const newPath = window.location.pathname;
		if (currentPath !== newPath) {
			urlPath.setState({ currentPath: newPath });
		}
	};
	Viewfy.createEffect(() => {
		window.addEventListener("popstate", routeChange);
		return () => {
			return window.removeEventListener("popstate", routeChange);
		};
	}, [routeChange]);

	urlPath.subscribe((prev) => {
		renderer();
		return prev;
	});

	return routes[currentPath] ? routes[currentPath]() : <h1>Page Not Found</h1>;
};

export const Link = (props) => {
	const { href, children } = props;
	return (
		<a
			{...props}
			onClick={(e) => {
				e.preventDefault();
				window.history.pushState({}, "", href);
				window.dispatchEvent(new Event("popstate"));
			}}
		>
			{...children}
		</a>
	);
};

export const setRenderer = (c) => {
	renderer = c;
};
