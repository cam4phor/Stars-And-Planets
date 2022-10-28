import { CSSTransition }  from 'react-transition-group'
import { animationConstants } from '../../constants/animationConstants'
import { NavLink } from 'react-router-dom'


const NavbarButton = (props) => {
	return (
		<CSSTransition
			in={props.isNavbarOpen}
			timeout={animationConstants.buttonFadeIn}
			classNames="navbar-button-animation"
		>
			<div className='navbar__button-div'>
				{
					<NavLink 
						className='navbar__button'
						to={props.navTo}>
						{props.name}
					</NavLink>
				}
			</div>
		</CSSTransition>
	)
}

export default NavbarButton