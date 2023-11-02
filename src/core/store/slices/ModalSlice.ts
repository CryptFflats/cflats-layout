import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface MenuState {
	developmentModal: boolean;
	trailerModal: boolean;
	supportModal: boolean;
	wlBoxModal: boolean;
	buyCflatModal: boolean;
}

const initialState: MenuState = {
	developmentModal: false,
	trailerModal: false,
	supportModal: false,
	wlBoxModal: false,
	buyCflatModal: false
};

const ModalSlice = createSlice({
	name: 'ModalSlice',
	initialState,
	reducers: {
		setDevelopment(state, action: PayloadAction<boolean>) {
			state.developmentModal = action.payload;
		},
		setTrailer(state, action: PayloadAction<boolean>) {
			state.trailerModal = action.payload;
		},
		setSupportModal(state, action: PayloadAction<boolean>) {
			state.supportModal = action.payload;
		},
		setWlBoxModal(state, action: PayloadAction<boolean>) {
			state.wlBoxModal = action.payload;
		},
		setBuyCflatModal(state, action: PayloadAction<boolean>) {
			state.buyCflatModal = action.payload;
		}
	}
});

export const {
	setDevelopment,
	setTrailer,
	setSupportModal,
	setWlBoxModal,
	setBuyCflatModal
} = ModalSlice.actions;
export default ModalSlice.reducer;

export const selectWlBoxModal = (state: RootState) =>
	state.ModalSlice.wlBoxModal;
export const selectCflatModal = (state: RootState) =>
	state.ModalSlice.buyCflatModal;
