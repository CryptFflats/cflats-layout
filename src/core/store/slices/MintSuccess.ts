import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MintSuccessSlice {
	isActive: boolean
	txHash: string | null
}

const initialState: MintSuccessSlice = {
	isActive: false,
	txHash: null
}

const MintSuccess = createSlice({
	name: 'MintSuccess',
	initialState,
	reducers: {
		setIsActive(state, action: PayloadAction<boolean>) {
			state.isActive = action.payload
		},
		setTxHash(state, action: PayloadAction<string | null>) {
			state.txHash = action.payload
		},
	}
})

export const { setIsActive, setTxHash } = MintSuccess.actions
export default MintSuccess.reducer
