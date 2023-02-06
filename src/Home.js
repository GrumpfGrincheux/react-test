import logo from "./logo.svg";

export function Home() {
	return (
		<main>
			<img src={logo} className="App-logo" alt="logo" />

			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</main>
	);
}
