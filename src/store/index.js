import { configureStore } from '@reduxjs/toolkit'
import reqresReducer from './reqresSlice'

export default configureStore({
	reducer: {
		reqres: reqresReducer,
	},
})
