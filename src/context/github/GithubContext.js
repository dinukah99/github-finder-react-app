import {createContext, useReducer} from 'react';
import githubReducer from "./GithubReducer.js";
import PropTypes from 'prop-types';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        const {items} = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    //Clear users from state
    const clearUsers = () =>
        dispatch(
            {
                type: 'CLEAR_USERS'
            }
        )

    //set loading
    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GithubContext.Provider value={
        {
            users: state.users,
            loading: state.loading,
            searchUsers: searchUsers,
            clearUsers: clearUsers
        }
    }>
        {children}
    </GithubContext.Provider>
}

GithubProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GithubContext;