import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MintErrorSlice {
	isMintErrorActive: boolean
	errorMessage: string | null
}

const initialState: MintErrorSlice = {
	isMintErrorActive: false,
	errorMessage: null
}

const MintError = createSlice({
	name: 'MintError',
	initialState,
	reducers: {
		setIsMintErrorActive(state, action: PayloadAction<boolean>) {
			state.isMintErrorActive = action.payload
		},
		setErrorMessage(state, action: PayloadAction<string | null>) {
			state.errorMessage = action.payload
		},
	}
})

export const { setIsMintErrorActive, setErrorMessage } = MintError.actions
export default MintError.reducer
