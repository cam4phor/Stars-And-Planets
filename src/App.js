import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./components/Pages/NotFound";
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
import { useEffect } from "react";
import mousePos from "./components/globalVariables/mousePos";
import Stars from "./components/Pages/stars";

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
	useEffect(() => {
		const mouseEvent = document.addEventListener('mousemove', (event) => {
			mousePos.x = event.clientX/window.innerWidth * 2 - 1;
			mousePos.y = event.clientY/window.innerHeight * 2 - 1
		})

		return (() => {
			document.removeEventListener('mousemove', mouseEvent)
		})
	}, [])
	return (
		<div>
			<Canvas
				onPointerDown={(e) => {
					mousePos.clicked = true
				}}
				onPointerUp={() => mousePos.clicked = false} 
				id="mercuryCanvas" 
				style={{width: "100vw", height: "100vh"}}
			>
				<UseSetRenderer />
				<ambientLight />
				<Stars />
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
