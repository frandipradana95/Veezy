const esbuild = require("esbuild");
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const isDev = process.argv.includes("--serve");

// Konfigurasi build
async function build() {
	const ctx = await esbuild.context({
		entryPoints: ["src/index.js"],
		bundle: true,
		outfile: "dist/bundle.js",
		format: "esm",
		sourcemap: true,
		loader: { ".js": "jsx" },
		jsxFactory: "createElement",
	});

	console.log("🚀 Build complete");

	if (isDev) {
		// Jalankan watch mode
		await ctx.watch();
		console.log("👀 Watching for changes...");

		// Jalankan dev server
		app.use(express.static("dist"));
		app.use(express.static(__dirname));

		app.all(/^(.*)$/, (req, res) => {
			res.sendFile(path.join(__dirname, "index.html"));
		});

		app.listen(port, () => {
			console.log(`🔥 Dev server running at http://localhost:${port}`);
		});
	} else {
		await ctx.dispose(); // Jika build normal, matikan context setelah selesai
	}
}

build().catch(() => process.exit(1));
