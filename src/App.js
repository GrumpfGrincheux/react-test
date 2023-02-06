import "./App.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { QuotePage } from "./QuotePage";
import { CounterPage } from "./CounterPage";
import { Hello } from "./Hello";
import { NavMenu } from "./NavMenu";
import { LoginForm } from "./LoginForm";
import { Home } from "./Home";
import { AuthenticatedRoute } from "./AuthenticatedRoute";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavMenu />
				<Routes>
					<Route path="/login" element={<LoginForm />} />
					<Route
						path="/"
						element={
							<AuthenticatedRoute>
								<Outlet />
							</AuthenticatedRoute>
						}
					>
						<Route index element={<Home />} />
						<Route path="quote" element={<QuotePage />} />
						<Route path="counter" element={<CounterPage />} />
						<Route path="hello" element={<Hello />} />
					</Route>
					<Route path="*" element={<p>Erreur 404 : Page non trouvée !</p>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
