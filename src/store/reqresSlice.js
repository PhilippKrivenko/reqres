import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ReqresService from '../services/reqres-service'

const { getUsers } = new ReqresService()

export const fetchUsers = createAsyncThunk(
	'reqres/fetchUsers',

	async function (_, { rejectWithValue }) {
		try {
			return await getUsers()
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const reqresSlice = createSlice({
	name: 'reqres',

	initialState: {
		users: [],
		isLoggedIn: false,
		status: null,
		error: null,
	},

	reducers: {},

	extraReducers: {
		[fetchUsers.pending]: (state) => {
			state.status = 'pending'
		},
		[fetchUsers.fulfilled]: (state, actions) => {
			state.status = 'resolved'
			state.users = actions.payload
		},
		[fetchUsers.error]: (state) => {
         state.status = 'rejected'
      },
	},
})

export default reqresSlice.reducer
