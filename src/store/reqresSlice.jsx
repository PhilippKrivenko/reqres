import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import ReqresService from '../services/reqres-service'

const { getUser, getUsers, postUser, putUser, delUser } =
	new ReqresService()

const createThunkCreator = (typePrefix, method) => {
	return createAsyncThunk(
		typePrefix,
		async (query, { rejectWithValue }) => {
			try {
				return await method(query)
			} catch (error) {
				return rejectWithValue(error.message)
			}
		}
	)
}

export const fetchUsers = createThunkCreator(
	'reqres/fetchUsers',
	getUsers
)

export const fetchUser = createThunkCreator(
	'reqres/fetchUser',
	getUser
)

export const createUser = createThunkCreator(
	'reqres/createUser',
	postUser
)

export const updateUser = createThunkCreator(
	'reqres/updateUser',
	putUser
)

export const deleteUser = createThunkCreator(
	'reqres/deleteUser',
	delUser
)

const reqresSlice = createSlice({
	name: 'reqres',

	initialState: {
		users: [],
		user: {},
		pageInfo: {},

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

		[fetchUser.pending]: (state) => {
			state.status = 'pending'
			state.error = null
		},
		[fetchUser.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.user = action.payload
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
			console.log(action.payload)
		},
		[createUser.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},

		[updateUser.pending]: (state) => {
			state.status = 'pending'
			state.error = null
		},
		[updateUser.fulfilled]: (state, action) => {
			state.status = 'resolved'
			console.log(action.payload)
		},
		[updateUser.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},

		[deleteUser.pending]: (state) => {
			state.status = 'pending'
			state.error = null
		},
		[deleteUser.fulfilled]: (state, action) => {
			state.status = 'resolved'
			console.log('delete')
		},
		[deleteUser.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
	},
})

export default reqresSlice.reducer
