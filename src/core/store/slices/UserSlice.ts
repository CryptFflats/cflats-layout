import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../services/AuthService/types';

interface UserState {
	isUserInFreeList: boolean
	isUserInDiscountList: boolean
	isAdmin: boolean
	user: null | IUser
}

const initialState: UserState = {
	isUserInFreeList: false,
	isUserInDiscountList: false,
	isAdmin: false,
	user: null
}

const UserSlice = createSlice({
	name: 'UserSlice',
	initialState,
	reducers: {
		setFreeList(state, action: PayloadAction<boolean>) {
			state.isUserInFreeList = action.payload
		},
		setDiscountList(state, action: PayloadAction<boolean>) {
			state.isUserInFreeList = action.payload
		},
		setIsAdmin(state, action: PayloadAction<boolean>) {
			state.isAdmin = action.payload
		},
		setUser(state, action: PayloadAction<IUser>){
			state.user = action.payload
		}
	}
})

export const { setFreeList, setDiscountList, setIsAdmin, setUser } = UserSlice.actions
export default UserSlice.reducer
