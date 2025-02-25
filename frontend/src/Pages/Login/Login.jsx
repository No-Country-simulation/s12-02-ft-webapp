import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/Icons/Logo.png'
import Navbar from '../../components/navbar/userNavbar'
import { ChevronRight, Eye, EyeClosed, ShieldAlert } from 'lucide-react'
import Uselogin from '../../Hooks/Authentication/Uselogin'
const Login = () => {
  const [Typeinput, SetTypeinput] = useState('password')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Validations, SetValidations] = useState(false);
  const {UseloginUser} = Uselogin();

  const hanlderlogin = (e) =>{
    e.preventDefault();
    if(email === '' || password === ''){
      SetValidations(true)
      return
    }

    UseloginUser(email, password)

  }
  return (
    <div className='Contenido'>
      <nav><Navbar /></nav>
      <main>
      <div className='flex sm:flex-row flex-col container mt-10 mx-auto items-stretch container'>
      <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between min-h-full">
      <div>
              <h2 className="text-5xl font-bold  text-center ">Bienvenido a Wallex</h2>
              <p className='text-2xl'>¡Accede a tu cuenta y empieza a gestionar tu dinero de manera fácil y segura! </p>
              <p className='text-2xl'>Solo necesitas tus credenciales para continuar.</p>
            </div>
            <div>
              <button className='flex bg-LightGolden items-center p-3 rounded-2xl text-lg'>  <ShieldAlert /> Tengo un problema de seguridad  <ChevronRight size={20} strokeWidth={1.25} /></button>
              <p className='text-lg'>Necesito ayuda!</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 px-13 py-6 bg-BlackBlue rounded-4xl min-h-full" >
          <div className=' flex justify-center items-center mb-3'>
              <img src={logo} className='w-25 mx-3'></img>
              <h3 className='text-LightGolden text-5xl'>Inicia Sesión</h3>
            </div>
            <form onSubmit={hanlderlogin}>
            <div className='flex flex-col '>
              <label className=' text-white text-lg'>Correo Electronico</label>
              <input type='text ' className="w-full bg-WhiteBlack text-Gray p-2 pr-10 rounded-md border focus:outline-none" placeholder='Ingrese correo electronico '  onChange={(e)=>(setEmail(e.target.value))}
              ></input>
              {(Validations && email === '') && <p className=' text-red-500 text-sm font-bold mt-1'>Ingrese una contraseña</p> }

              <label className=' text-white  text-lg'>Contraseña</label>
              <div className="relative w-full">
                <input
                  type={Typeinput}
                  className="w-full bg-WhiteBlack text-Gray p-2 pr-10 rounded-md border focus:outline-none"
                  placeholder="Ingrese contraseña"
                  onChange={(e)=>(setPassword(e.target.value))}
                />
                { Typeinput === 'password' ? <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-Gray cursor-pointer"  onClick={()=>(SetTypeinput('Text'))}/> 
                : <EyeClosed className="absolute right-3 top-1/2 transform -translate-y-1/2 text-Gray cursor-pointer"  onClick={()=>(SetTypeinput('password'))}/>
                }
              </div>
              {(Validations && password === '') && <p className=' text-red-500 text-sm font-bold mt-1'>Ingrese una contraseña</p> }
              <button className='bg-LightGolden w-1/2 mx-auto my-10 p-2 rounded-3xl text-2xl' onClick={hanlderlogin}>Ingresar</button>
            </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login