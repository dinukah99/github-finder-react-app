import {useState, useContext} from 'react';
import GithubContext from "../../context/github/GithubContext.js";

function UserSearch() {
    const [text, setText] = useState('')

    const {users} = useContext(GithubContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            alert('Please enter something')
        } else {
            // TODO - Search Users
        }
        setText('');
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input className="input w-full pr-40 bg-gray-200 input-lg text-black" placeholder='Search'
                                   value={text} onChange={handleChange}>

                            </input>
                            <button type='submit'
                                    className="absolute top-0 right-0 rounded-l-none w-36 btn bg-gray-600 btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button onClick={() => setText('')} className="btn btn-ghost btn-lg bg-gray-600">Clear</button>
                </div>
            )}
        </div>
    );
}

export default UserSearch;