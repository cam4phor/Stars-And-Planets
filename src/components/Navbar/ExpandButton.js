import image from '../../assets/thumbs/left-arrow.png'
import useStore from '../../state/useStore'
import { CSSTransition } from 'react-transition-group'
import { animationConstants } from '../../constants/animationConstants'

const ExpandButton = () => {
	const isNavbarOpen = useStore(state => state.isNavbarOpen)
	const setIsNavbarOpen = useStore(state => state.setIsNavbarOpen)
	return (
		<CSSTransition
			in={isNavbarOpen}
			timeout={animationConstants.navbarMoveIn}
			classNames="navbar-expand-button-animation"
			>
				<button className="navbar__expand-button" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
					<img src={image} alt={"expand-button"} />
				</button>
		</CSSTransition>
		
	)
}

export default ExpandButton