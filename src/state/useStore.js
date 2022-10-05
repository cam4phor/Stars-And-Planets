import create from 'zustand'

const useStore = create((set) => ({
	isNavbarOpen: false,
	setIsNavbarOpen: (isNavbarOpen) => set((state) => ({...state, isNavbarOpen}))
}))

export default useStore