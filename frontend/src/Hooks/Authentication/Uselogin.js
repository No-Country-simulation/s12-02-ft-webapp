import { useNavigate } from "react-router-dom"
import Toastify from "toastify-js"; 
import { AuthUserService } from "../../Services/AuthUserService";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";


const Uselogin = () =>{
    const navigate = useNavigate();
    const {LoginUserService} = AuthUserService();
    const {login} = useContext(AuthContext)
    const UseloginUser = async(email, password) =>{

        try{
            const response = await LoginUserService(email, password)
            
             if (response.status == 200){
                const data  = await response.data;

                login(data);
                
                navigate('/Home')
            
                return;

             }

        }catch{

        }

    }



    return {UseloginUser}
}

export default Uselogin;
