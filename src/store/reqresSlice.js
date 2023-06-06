import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ReqresService from '../services/reqres-service'

const { getUsers } = new ReqresService()

export const fetchUsers = createAsyncThunk(
	'reqres/fetchUsers',

	async function () {
		return await getUsers()
	}
)

const reqresSlice = createSlice({
	name: 'reqres',

	initialState: {
		usersData: [],
		loading: true,
		error: false,
		isLoggedIn: false,
	},

	reducers: {},

	extraReducers: {
		[fetchUsers.pending]: (state) => {
			state.status = 'pending'
		},
		[fetchUsers.fulfilled]: (state, actions) => {
			state.status = 'resolved'
			state.usersData = actions.payload
		},
		[fetchUsers.rejected]: () => {},
	},
})

export default reqresSlice.reducer
