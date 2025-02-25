import { useNavigate } from "react-router-dom"
import Toastify from "toastify-js"; 
import { AuthUserService } from "../../Services/AuthUserService";
import Uselogin from "./Uselogin";


const UseRegister = () =>{
    const navigate = useNavigate();
    const {RegisterUserService} = AuthUserService();
    const {UseloginUser} = Uselogin();

    const UseRegisterUser = async(FullName, Dni, Email, Telephone, Password) =>{

        try{
            const response = await RegisterUserService(FullName, Dni, Email, Telephone, Password)
            
             if (response.status == 200){
                const data  = await response.data;

                UseloginUser(Email, Password)
                navigate('/Home')
                return;

             }

        }catch{

        }

    }


    return {UseRegisterUser}
}

export default Uselogin;
