import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../services/AuthService/types';

interface UserState {
	isUserHaveEnoughBalance: boolean,
	isUserHaveWl: boolean
	isAdmin: boolean
	user: null | IUser
}

const initialState: UserState = {
	isUserHaveEnoughBalance: false,
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
		},
		setIsUserHaveEnoughBalance(state, action: PayloadAction<boolean>) {
			state.isUserHaveEnoughBalance = action.payload
		}
	}
})

export const { setIsAdmin, setUser, setIsUserHaveWl, setIsUserHaveEnoughBalance } = UserSlice.actions
export default UserSlice.reducer
