import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface WlBoxSlice {
	isWlBoxActive: boolean,
	wlBoxId: number,
}

const initialState: WlBoxSlice = {
	isWlBoxActive: false,
	wlBoxId: 2000,
}

const WlBoxState = createSlice({
	name: 'WlBox',
	initialState,
	reducers: {
		setIsWlBoxActive(state, action: PayloadAction<boolean>) {
			state.isWlBoxActive = action.payload
		},
		setWlBoxId(state, action: PayloadAction<number>) {
			state.wlBoxId = action.payload
		},
	}
})

export const { setIsWlBoxActive, setWlBoxId } = WlBoxState.actions
export default WlBoxState.reducer
