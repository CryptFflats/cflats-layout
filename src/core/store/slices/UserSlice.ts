import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../services/AuthService/types';

interface UserState {
	isUserHaveWl: boolean
	isAdmin: boolean
	user: null | IUser
}

const initialState: UserState = {
	isUserHaveWl: true,
	isAdmin: false,
	user: null,
}

const UserSlice = createSlice({
	name: 'UserSlice',
	initialState,
	reducers: {

		setIsAdmin(state, action: PayloadAction<boolean>) {
			state.isAdmin = action.payload
		},
		setUser(state, action: PayloadAction<IUser>){
			state.user = action.payload
		},
		setIsUserHaveWl(state, action: PayloadAction<boolean>) {
			state.isUserHaveWl = action.payload
		}
	}
})

export const { setIsAdmin, setUser, setIsUserHaveWl } = UserSlice.actions
export default UserSlice.reducer
