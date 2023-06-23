import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuState {
	developmentModal: boolean
	trailerModal: boolean
	//mintSuccess:
}

const initialState: MenuState = {
	developmentModal: false,
	trailerModal: false
}

const ModalSlice = createSlice({
	name: 'ModalSlice',
	initialState,
	reducers: {
		setDevelopment(state, action: PayloadAction<boolean>) {
			state.developmentModal = action.payload
		},
		setTrailer(state, action: PayloadAction<boolean>) {
			state.trailerModal = action.payload
		}
	}
})

export const { setDevelopment, setTrailer } = ModalSlice.actions
export default ModalSlice.reducer
