
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const [user, loading] = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="radial-progress" style={{"--value":70}} role="progressbar">70%</div>
    }
    if(user){
        return children;
    }
    
    return <Navigate to = "/login" state={{from: location}} replace></Navigate>

}
export default PrivateRoutes;