const SERVER_URL = "http://localhost:3001/"
const USER_URL = SERVER_URL + "user/"

const SIGNUP_URL = USER_URL + "signup"
const LOGIN_URL = USER_URL + "login"
const CHECK_AUTH_URL = USER_URL + "checkAuth"

export { SERVER_URL as default, SIGNUP_URL, LOGIN_URL, CHECK_AUTH_URL }