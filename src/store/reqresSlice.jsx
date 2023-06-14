import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers, fetchUser, createUser } from './actions'

const reqresSlice = createSlice({
	name: 'reqres',

	initialState: {
		users: [],
		searchTerm: '',
		pageInfo: {},
		isLoggedIn: false,
		status: null,
		error: null,
	},

	reducers: {
		searchPanel(state, action) {
			state.searchTerm = action.payload
		},
	},

	extraReducers: {
		[fetchUsers.pending]: (state) => {
			state.status = 'pending'
			state.error = null
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.users = action.payload.data
			state.pageInfo = action.payload.pageInfo
		},
		[fetchUsers.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},

		[fetchUser.pending]: (state) => {
			state.status = 'pending'
			state.error = null
		},
		[fetchUser.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.users = action.payload
		},
		[fetchUser.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},

		[createUser.pending]: (state) => {
			state.status = 'pending'
			state.error = null
		},
		[createUser.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.users.push(action.payload)
		},
		[createUser.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
	},
})

export const { searchPanel } = reqresSlice.actions

export default reqresSlice.reducer
