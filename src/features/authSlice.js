import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    password: null,
    token: null
  },
  reducers: {
    setCredentials: (state, action) => {
      const { email, password, accessToken } = action.payload
      state.email = email
      state.password = password
      state.token = accessToken
    },
    logout: (state, action) => {
      state.email = null
      state.password = null
      state.token = null
    }
  }

})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer

const selectCurrentEmail = state => state.auth.Email
const selectCurrentPassword = state => state.auth.Password
const selectCurrentToken = state => state.auth.token
