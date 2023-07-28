import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type typeMenu = 'menu' | 'lang' | 'wl' | 'genZero' | 'genFirst'

interface ProfileSidebarState {
	menu: typeMenu
}

const initialState: ProfileSidebarState = {
	menu: 'menu'
}

const ProfileSidebarSlice = createSlice({
	name: 'ProfileSidebarSlice',
	initialState,
	reducers: {
		setTypeMenu(state, action: PayloadAction<typeMenu>) {
			state.menu = action.payload
		}
	}
})

export const { setTypeMenu } = ProfileSidebarSlice.actions
export default ProfileSidebarSlice.reducer
