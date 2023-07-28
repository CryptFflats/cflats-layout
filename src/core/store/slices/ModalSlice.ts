import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuState {
	developmentModal: boolean
	trailerModal: boolean
	supportModal: boolean
}

const initialState: MenuState = {
	developmentModal: false,
	trailerModal: false,
	supportModal: false
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
		},
		setSupportModal(state, action: PayloadAction<boolean>) {
			state.supportModal = action.payload
		}
	}
})

export const { setDevelopment, setTrailer, setSupportModal } = ModalSlice.actions
export default ModalSlice.reducer
