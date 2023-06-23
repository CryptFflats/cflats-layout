import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MintSlice {
	genZeroPlace: boolean
	genFirstPlace: boolean
	wlPlace: boolean
}

const initialState: MintSlice = {
	genFirstPlace: false,
	genZeroPlace: false,
	wlPlace: false
}

const MintSlice = createSlice({
	name: 'MintSlice',
	initialState,
	reducers: {
		setGenZero(state, action: PayloadAction<boolean>) {
			state.genZeroPlace = action.payload
		},
		setGenFirst(state, action: PayloadAction<boolean>) {
			state.genFirstPlace = action.payload
		},
		setWhileList(state, action: PayloadAction<boolean>) {
			state.wlPlace = action.payload
		}
	}
})

export const { setGenZero, setGenFirst, setWhileList } = MintSlice.actions
export default MintSlice.reducer
