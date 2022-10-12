import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./components/Pages/NotFound";

const App = () => {
    return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="*" element={<NotFound />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
