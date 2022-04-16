import React, {useState} from 'react';
import auth from '../auth/auth';
import hasWhiteSpace from '../utils/hasWhiteSpace';

const SuperInput = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [noSpaceClass, setNoSpaceClass] = useState(false);
    const [noUsernameClass, setNoUsernameClass] = useState(false);
    const [noPasswordClass, setNoPasswordClass] = useState(false);
    const [user, setUser] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();
        setNoSpaceClass(false);
        setNoUsernameClass(false);
        setNoPasswordClass(false);
        setUser('');

        if (hasWhiteSpace(email) || hasWhiteSpace(password)) {
            setNoSpaceClass(true);
        } else {
            try {
                const user = await auth(email, password);
                setUser(user);
                console.log(user);
            } catch (e) {
                if(e==='username-incorrect'){
                    setNoUsernameClass(true)
                }else{
                    setNoPasswordClass(true)
                }
            }
        }
    }

    const handleCancel = () => {
        setEmail('');
        setPassword('');
        setNoSpaceClass('');
        setNoUsernameClass('');
        setNoPasswordClass('');
        setUser('');
    }


    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className='input-container'>
                    <div className='email-container'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            className={`
                            email-input 
                            ${noSpaceClass ? 'no-space' : ''} 
                            ${noUsernameClass ? 'no-user' : ''} 
                            `}
                            type='text'
                            placeholder="Username" />
                    </div>
                    <div className='password-container'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            className={`
                            password-input 
                            ${noSpaceClass ? 'no-space' : ''}
                            ${noPasswordClass ? 'no-user' : ''}
                            `}
                            type='password'
                            placeholder="Password" />
                    </div>
                    <div className='button-container'>
                        <button type='submit'>Login</button>
                        <button onClick={handleCancel} type='button'>Cancel</button>
                    </div>
                    {noSpaceClass && <div className={`${noSpaceClass ? 'no-space-error' : ''}`}>Username and Password cannot contain spaces or be empty!</div>}
                    {noUsernameClass && <div className={`${noUsernameClass ? 'no-user-error' : ''}`}>Username is incorrect!</div>}
                    {noPasswordClass && <div className={`${noPasswordClass ? 'no-user-error' : ''}`}>Password is incorrect!</div>}
                    {user && <pre>{user}</pre>}
                </div>
            </form>
        </div>
    )
}

export default SuperInput;
