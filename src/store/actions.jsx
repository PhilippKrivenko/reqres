import { createAsyncThunk } from '@reduxjs/toolkit'
import ReqresService from '../services/reqres-service'

const { getUser, getUsers, postUser } = new ReqresService()

const fetchUsers = createAsyncThunk(
	'reqres/fetchUsers',

	async (page, { rejectWithValue }) => {
		try {
			return await getUsers(page)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const fetchUser = createAsyncThunk(
	'reqres/fetchUser',

	async (userId, { rejectWithValue }) => {
		try {
			return await getUser(userId)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const createUser = createAsyncThunk(
	'reqres/createUser',

	async (newUser, { rejectWithValue }) => {
		try {
			return await postUser(newUser)
		} catch (error) {
			return  rejectWithValue(error.message)
		}
	}
)

export { fetchUsers, fetchUser, createUser }
