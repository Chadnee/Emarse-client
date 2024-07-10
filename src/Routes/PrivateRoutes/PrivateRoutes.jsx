
import { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {

    
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log("user:", user)
    if(loading){
      return <progress className="progress w-56"></progress>
      // return <div className="radial-progress" style={{"--value":70}} role="progressbar">70%</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
   // const {user, loading} = useContext(AuthContext)
    // const location = useLocation();
    // console.log(user.email)

    // if(loading){
    //     return <div className="radial-progress" style={{"--value":70}} role="progressbar">70%</div>
    // }
    // if(user){
    //     return children;
    // }
    
    // return <Navigate to = "/login" state={{from: location}} replace></Navigate>

}
export default PrivateRoutes;