import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuState {
	isWalletActive: boolean
	isProfileActive: boolean
	isMenuActive: boolean
	avatar: string | null
}

const initialState: MenuState = {
	isWalletActive: false,
	isProfileActive: false,
	isMenuActive: false,
	avatar: null
}

const MenuSlice = createSlice({
	name: 'MenuSlice',
	initialState,
	reducers: {
		setWalletActive(state, action: PayloadAction<boolean>) {
			state.isWalletActive = action.payload
		},
		setProfileActive(state, action: PayloadAction<boolean>) {
			state.isProfileActive = action.payload
		},
		setAvatar(state, action: PayloadAction<string>) {
			state.avatar = action.payload
		},
		setMenuActive(state, action: PayloadAction<boolean>) {
			state.isMenuActive = action.payload
		}
	}
})

export const { setWalletActive, setAvatar, setProfileActive, setMenuActive } =
	MenuSlice.actions
export default MenuSlice.reducer
