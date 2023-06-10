import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './actions'

const reqresSlice = createSlice({
	name: 'reqres',

	initialState: {
		users: [],
		pageInfo: {},
		isLoggedIn: false,
		status: null,
		error: null,
	},

	reducers: {},

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
	},
})

export default reqresSlice.reducer
