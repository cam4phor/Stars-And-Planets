import create from 'zustand'
export const initialState = {
	isNavbarOpen: false,
	animationPaused: true
}

const useStore = create((set) => ({
	...initialState,
	setIsAnimationPaused: (animationPaused) => set((state) => ({...state, animationPaused})),
	setIsNavbarOpen: (isNavbarOpen) => set((state) => ({...state, isNavbarOpen}))
}))

export default useStore