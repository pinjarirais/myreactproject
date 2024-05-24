import { configureStore } from '@reduxjs/toolkit'
import apicallSlice from './reducer/reduxapicall'

export const store = configureStore({
  reducer: {
    userapi: apicallSlice,
  },
})