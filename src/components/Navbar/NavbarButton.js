import { CSSTransition }  from 'react-transition-group'
const NavbarButton = (props) => {
	console.log(props.isNavbarOpen)
	return (
		<CSSTransition
			in={props.isNavbarOpen}
			timeout={800}
			classNames="navbar-button-animation"
		>
			<div>
				{
					props.isNavbarOpen &&
					<button className='navbar__button'>
						{props.name}
					</button>
				}
			</div>
			
			
		</CSSTransition>
	)
}

export default NavbarButton