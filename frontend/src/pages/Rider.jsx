
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import RiderData from '../components/RiderData';
import UserData from '../components/UserData';

const Rider = () => {
    const {isAuthenticated,user,isLoading} = useAuth0()
    useEffect(() => {
      console.log(user)
    
    }, [])

    if(isLoading)
    {
        return (<div>Loading...</div>)
    }
    
    return (
        <>
            <UserData user={user}></UserData>
            <RiderData user={user}></RiderData>
        </>
    )
}

export default Rider
