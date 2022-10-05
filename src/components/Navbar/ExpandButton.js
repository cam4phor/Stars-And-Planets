import image from '../../assets/thumbs/left-arrow.png'
import useStore from '../../state/useStore'

const ExpandButton = () => {
	const isNavbarOpen = useStore(state => state.isNavbarOpen)
	const setIsNavbarOpen = useStore(state => state.setIsNavbarOpen)
	return (
		<button className="navbar__expand-button" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
			<img src={image} />
		</button>
	)
}

export default ExpandButton