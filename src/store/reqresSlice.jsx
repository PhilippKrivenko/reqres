import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import ReqresService from '../services/reqres-service'

const {
	getUser,
	getUsers,
	postUser,
	putUser,
	delUser,
	registerUser,
	loginUser,
} = new ReqresService()

export const fetchUsers = createAsyncThunk(
	'reqres/fetchUsers',

	async (query, { rejectWithValue }) => {
		try {
			return await getUsers(query)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const fetchUser = createAsyncThunk(
	'reqres/fetchUser',

	async (userId, { rejectWithValue }) => {
		try {
			return await getUser(userId)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const createUser = createAsyncThunk(
	'reqres/createUser',

	async (newUser, { rejectWithValue }) => {
		try {
			return await postUser(newUser)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const updateUser = createAsyncThunk(
	'reqres/updateUser',

	async (updateUser, { rejectWithValue }) => {
		try {
			return await putUser(updateUser)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const deleteUser = createAsyncThunk(
	'reqres/deleteUser',

	async (userId, { rejectWithValue }) => {
		try {
			return await delUser(userId)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const register = createAsyncThunk(
	'reqres/register',

	async (auth, { rejectWithValue }) => {
		try {
			return await registerUser(auth)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const login = createAsyncThunk(
	'reqres/login',

	async (auth, { rejectWithValue }) => {
		try {
			return await loginUser(auth)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const reqresSlice = createSlice({
	name: 'reqres',

	initialState: {
		users: [],
		user: {},
		pageInfo: {},

		status: null,
		error: null,

		isLoggedIn: false,
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

		[register.pending]: (state) => {
			state.status = 'pending'
			state.error = null
		},
		[register.fulfilled]: (state, action) => {
			state.status = 'resolved'
			console.log(action.payload)
		},
		[register.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},

		[login.pending]: (state) => {
			state.status = 'pending'
			state.error = null
		},
		[login.fulfilled]: (state, action) => {
			state.status = 'resolved'
			console.log(action.payload)
		},
		[login.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
	},
})

export default reqresSlice.reducer
