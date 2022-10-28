import useStore from "../../state/useStore"
import ExpandButton from "./ExpandButton"
import { CSSTransition }  from 'react-transition-group'
import NavbarButtonGroup from "./NavbarButtonGroup"
import { animationConstants } from "../../constants/animationConstants"

const Navbar = () => {
	const isNavbarOpen = useStore(state => state.isNavbarOpen)
	return (
		<CSSTransition
			in={isNavbarOpen}
			timeout={animationConstants.navbarMoveIn}
			classNames="navbar-animation"
			>
			<div className="navbar" style={{backgroundColor: isNavbarOpen ? "rgba(17, 17, 17, 0.8)" : ""}}>
				<ExpandButton />
				<NavbarButtonGroup isNavbarOpen={isNavbarOpen}></NavbarButtonGroup>
			</div>
		</CSSTransition>
	)
}

export default Navbar