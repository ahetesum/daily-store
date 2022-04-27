import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../Helpers/FirebaseHelper';


export const UserComponent=()=>{

    const [user, loading, error] = useAuthState(auth);
    return (

        <div className='userContainer'>
            <img src={require('../../Assets/user.png')} height={35} width={35} />
            {(user)?<div>{user.email}</div>:<div><Link id='userA' to='/login'>Login</Link></div>}
        </div>
    );
}