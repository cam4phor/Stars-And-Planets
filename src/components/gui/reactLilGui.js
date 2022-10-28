import GUI from "lil-gui";
import { initialState } from "../../state/useStore";
import useStore from "../../state/useStore";

const ReactLilGUI = () => {
	const gui = new GUI({ container: document.querySelector('#gui') });
	const setIsAnimationPaused = useStore(state => state.setIsAnimationPaused)

	gui.add( initialState, 'animationPaused').onChange((value) => {
		setIsAnimationPaused(!value)
		const elems = document.querySelectorAll("body > *");
		if(value === false){
			elems.forEach(elem => elem.classList.add("runAnimation"))
			elems.forEach(elem => elem.classList.remove("pauseAnimation"))
		}else{
			elems.forEach(elem => elem.classList.remove("runAnimation"))
			elems.forEach(elem => elem.classList.add("pauseAnimation"))
		}
	}); 

	return null;
}

export default ReactLilGUI;