import { configureStore } from '@reduxjs/toolkit'
import MenuSlice from './slices/MenuSlice'
import ModalSlice from './slices/ModalSlice'
import ProfileSidebarSlice from '../../screens/Home/modules/ProfileSidebar/slices/ProfileSidebarSlice'
import MintSlice from './slices/MintSlice'
import MintSuccess from './slices/MintSuccess';
import NavbarSlice from './slices/NavbarSlice';

export const store = configureStore({
	reducer: {
		MenuSlice,
		ModalSlice,
		ProfileSidebarSlice,
		MintSlice,
		MintSuccess,
		NavbarSlice
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
