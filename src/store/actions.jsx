import { createAsyncThunk } from '@reduxjs/toolkit'
import ReqresService from '../services/reqres-service'

const { getAllUsers } = new ReqresService()

const fetchUsers = createAsyncThunk(
	'reqres/fetchUsers',

	async (_, { rejectWithValue }) => {
		try {
			return await getAllUsers()
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export { fetchUsers }
