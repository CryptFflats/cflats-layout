import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NavbarSliceState {
	height: number
}

const initialState: NavbarSliceState = {
	height: 0
}

const NavbarSlice = createSlice({
	name: 'NavbarSlice',
	initialState,
	reducers: {
		setHeight(state, action: PayloadAction<number>) {
			state.height = action.payload
		}
	}
})

export const { setHeight } = NavbarSlice.actions
export default NavbarSlice.reducer
