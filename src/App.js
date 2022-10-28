import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./components/Pages/NotFound";
import ReactLilGUI from "./components/gui/reactLilGui";
import Mercury from "./components/Pages/mercury";
import Venus from "./components/Pages/venus";
import Earth from "./components/Pages/earth";
import Mars from "./components/Pages/mars";
import Jupiter from "./components/Pages/jupiter";
import Saturn from "./components/Pages/saturn";
import Uranus from "./components/Pages/uranus";
import Neptune from "./components/Pages/neptune";
import Pluto from "./components/Pages/pluto";
import { Canvas, useThree } from "@react-three/fiber";

const App = () => {
    return (
		<div className="App">
			<Router>
				<Navbar />
				<Scene />
				<div id='#gui'></div>
				{
					// <ReactLilGUI />
				}
			</Router>
		</div>
	);
}

const Scene = () => {
	return (
		<div>
			<Canvas id="mercuryCanvas" 
				style={{width: "100vw", height: "100vh"}}
			>
				<UseSetRenderer />
				<ambientLight />
				<Routes>
					<Route path="*" element={<NotFound />}/>
					<Route path="/mercury" element={<Mercury />}/>
					<Route path="/venus" element={<Venus />}/>
					<Route path="/earth" element={<Earth />}/>
					<Route path="/mars" element={<Mars />}/>
					<Route path="/jupiter" element={<Jupiter />}/>
					<Route path="/saturn" element={<Saturn />}/>
					<Route path="/uranus" element={<Uranus />}/>
					<Route path="/neptune" element={<Neptune />}/>
					<Route path="/pluto" element={<Pluto />}/>
				</Routes>
			</Canvas>
		</div>
	)
}

const UseSetRenderer = () => {
	const state = useThree()
	state.gl.setPixelRatio(window.devicePixelRatio)
	state.camera.position.z = 6;
	return null;
}

export default App;
