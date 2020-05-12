import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authuser'

const AUTHED_ID = 'dan_abramov'

export function handleInitialData() {
    return getInitialData().then(
        ({users, tweets}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
        }
    )
}