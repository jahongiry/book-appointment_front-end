import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";

const initialState = {
    name: "",
    loggedIn: false,
    userId: '',
    signedUp: false,
}

const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const signUp = (payload) => ({
        type: SIGN_UP,
        payload
    })

export const logIn = (payload) => ({
    type: LOG_IN,
    payload
})

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: {
            name: '',
            loggedIn: false,
            userId: '',
            signedUp: false
        }
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...action.payload
            }
        case LOG_IN:
           return action.payload 
        
        case LOG_OUT:
            return action.payload   
        
        default:  
        return state  
    }
}

const sendSignupDetails = (details) => async (dispatch) => {
 const { firstName, lastName, username } = details;
 try {
     const response = await axios.post(`${BASE_URL}/signup`, {
        first_name: firstName,
        last_name: lastName,
        username
    })
    dispatch(signUp(
        { 
            name: username,
            loggedIn: false,
            userId: '',
            signedUp: 'up'
        }
    ))
    } catch (error) {
        dispatch(signUp(
            {
                name: '',
                loggedIn: false,
                userId: '',
                signedUp: 'error'
            }
        )
        )
    }
   
 }

 export const sendSigninDetails = (details) => async (dispatch) => {
    const { username } = details;
    try {
    const response = await axios.post(`${BASE_URL}/signin`, {        
          username
    })

      
        const { data } = response;
        const { user , jwt}  = data;
        console.log(response)
      
        const userDate = {
            name: user.username,
            loggedIn: 'in',
            userId: user.id,
            signedUp: true
        }

           
        
        localStorage.setItem('token', jwt);
        localStorage.setItem('user', JSON.stringify(userDate));
        dispatch(logIn(userDate)) 

    } catch (error) {
        dispatch(logIn(
            {
                name: '',
                loggedIn: false,
                userId: '',
                signedUp: false
            }
        ))
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logOut())
}


 export default sendSignupDetails

