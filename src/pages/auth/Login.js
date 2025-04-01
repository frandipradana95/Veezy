import Viewfy from "viewfy-core";
import { Link } from "../../router";

export const Login = () => {
	return (
		<div style={styles.AuthContainer}>
			<h2 style={styles.title}>Masuk</h2>
			<input
				style={styles.input}
				type="text"
				placeholder="Email atau Username"
			/>
			<input style={styles.input} type="password" placeholder="Password" />
			<button style={styles.button}>Masuk</button>
			<p style={styles.p}>
				Belum punya akun?{" "}
				<Link href={"/register"} style={styles.a}>
					Register
				</Link>
			</p>
		</div>
	);
};

const styles = Viewfy.createStyle({
	AuthContainer: {
		background: "white",
		padding: "20px",
		borderRadius: "8px",
		boxShadow: "0 0 10px rgba(0,0,0,0.1)",
		width: "300px",
		textAlign: "center",
	},
	title: {
		marginBottom: "20px",
	},
	input: {
		width: "100%",
		padding: "10px",
		margin: "8px 0",
		border: "1px solid #ccc",
		borderRadius: "5px",
	},
	button: {
		width: "100%",
		padding: "10px",
		backgroundColor: "#1877f2",
		border: "none",
		color: "white",
		fontSize: "16px",
		cursor: "pointer",
		borderRadius: "5px",
		marginTop: "10px",
	},
	p: {
		marginTop: 10,
		fontSize: 14,
	},
	a: {
		color: "#1877f2",
		textDecoration: "none",
	},
});
