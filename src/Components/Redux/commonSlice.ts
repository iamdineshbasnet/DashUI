import { createSlice } from '@reduxjs/toolkit';
import { commonAppTypes } from './type';

const initialState: commonAppTypes = {
	appModal: '',
	showAppSideBar: false,
};

export const CommonSlice = createSlice({
	name: 'CommonApp',
	initialState,
	reducers: {
		openAppModal: (state, { payload }) => {
			state.appModal = payload;
		},
		openAppSideBar: (state, { payload }) => {
			state.showAppSideBar = payload;
		},
		closeAppModal: (state) => {
			state.appModal = '';
		},
	},
});

export const { openAppModal, closeAppModal, openAppSideBar } =
	CommonSlice.actions;

export default CommonSlice.reducer;
