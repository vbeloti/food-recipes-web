import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token', 'user'],
  signUpRequest: ['name', 'email', 'password'],
  signFailure: [],
  signOut: []
})

const initialState = {}

interface IAction {
  [key: string]: string;
}

const signInRequest = (state = initialState, action: IAction) => {
  return ({ email: action.email, password: action.password, loading: true })
}

const signInSuccess = (state = initialState, action: IAction) => {
  return ({ token: action.token, action: action.user, loading: false, signed: true })
}

const signUpRequest = (state = initialState, action: IAction) => {
  return ({ name: action.name, email: action.email, password: action.password })
}

const signFailure = (state = initialState, action: IAction) => {
  return { signed: false }
}

const signOut = (state = initialState, action: IAction) => {
  return { signed: false }
}

export default createReducer(initialState, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_FAILURE]: signFailure,
  [Types.SIGN_OUT]: signOut
})
