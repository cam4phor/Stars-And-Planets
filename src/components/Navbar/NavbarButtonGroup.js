import { bodies } from "../info/bodies"
import NavbarButton from "./NavbarButton"

const NavbarButtonGroup = (props) => {
	return (
		Object.keys(bodies).map(body => {
			return (<NavbarButton 
				key={bodies[body].name}
				isNavbarOpen={props.isNavbarOpen}
				name={bodies[body].name}
				navTo={bodies[body].navTo} 
			/>)
		})
	)
}

export default NavbarButtonGroup