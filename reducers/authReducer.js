import {
    LOGIN_SUCCESS
} from '../actions/types'

import {
    cloneObject
} from '../helpers/immutabilityHelpers'

const initialState = {
    user: {
        loggedIn: false
    }
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    loggedIn: true
                }
            }
        default:
            return state
    }
}

export default auth