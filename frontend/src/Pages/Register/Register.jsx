import React, { useState } from 'react'
import './Register.css'
import Navbar from '../../components/navbar/userNavbar'
import logo from '../../assets/Icons/Logo.png'

const Register = () => {
  const [Email, SetEmail] = useState('');
  const [FullName, SetFullname] = useState('');
  const [Telephone, SetTelephone] = useState('');
  const [Password, SetPassword] = useState('');
  const [Dni, SetDni] = useState(null);
  const [ConfirmPassword, SetConfirmPassword] = useState('');
  const [Validate, SetValidate] = useState(false)
  const HandlerRegistar  = (e) =>{
       e.preventDefault();
      if(Email == '' || FullName == '' || Telephone == '' || Password === '' || ConfirmPassword != Password || Dni == null){
        SetValidate(true)
      }

  }
  return (
    <div className='Contenido'>
      <nav><Navbar /></nav>

      <main>
        <div className='flex justify-center items-center mt-10'>
        <div className='bg-BlackBlue max-w-lg w-full p-8 rounded-xl shadow-lg'>
          <div className='flex justify-center items-center mb-5'>
            <img src={logo} className="w-20 mx-3"></img>
            <h3 className='text-LightGolden text-4xl font-bold'>Crea tu cuenta</h3>
            </div>

            <form className='space-y-4 w-4/5 mx-auto' onSubmit={HandlerRegistar}>
              <div>
                <label htmlFor='email' className='text-white text-lg'>Correo Electrónico</label>
                <input id='email' type='email' className='w-full bg-WhiteBlack text-Gray p-3 rounded-md border border-LightGolden focus:outline-none focus:ring-2 focus:ring-LightGolden' placeholder='Ingrese correo electrónico' onChange={(e)=>(SetEmail(e.target.value))}/>
                {(Email == '' && Validate) && <p className=' text-red-500 text-sm font-bold mt-1'>Ingrese un correo electronico</p>}
              
              </div>
              
              <div>
                <label htmlFor='name' className='text-white text-lg'>Nombre Completo</label>
                <input id='name' type='text' className='w-full bg-WhiteBlack text-Gray p-3 rounded-md border border-LightGolden focus:outline-none focus:ring-2 focus:ring-LightGolden' placeholder='Ingrese nombre completo' onChange={(e)=>(SetFullname(e.target.value))} />
                {(FullName == '' && Validate) && <p className=' text-red-500 text-sm font-bold mt-1'>Ingrese nombre completo</p>}
              </div>

              <div>
                <label htmlFor='name' className='text-white text-lg'>Documento (DNI)</label>
                <input id='name' type='number' className='w-full bg-WhiteBlack text-Gray p-3 rounded-md border border-LightGolden focus:outline-none focus:ring-2 focus:ring-LightGolden' placeholder='Ingrese documento' onChange={(e)=>(SetDni(e.target.value))} />
                {(Dni == null && Validate) && <p className=' text-red-500 text-sm font-bold mt-1'>Ingrese documento</p>}
              </div>
              <div>
                <label htmlFor='phone' className='text-white text-lg'>Número Telefónico</label>
                <input id='phone' type='tel' className='w-full bg-WhiteBlack text-Gray p-3 rounded-md border border-LightGolden focus:outline-none focus:ring-2 focus:ring-LightGolden' placeholder='Ingrese número telefónico'  onChange={(e)=>(SetTelephone(e.target.value))}/>
                {(Telephone == '' && Validate) && <p className=' text-red-500 text-sm font-bold mt-1'>Ingrese número telefónico</p>}
              </div>

              <div>
                <label htmlFor='password' className='text-white text-lg'>Contraseña</label>
                <input id='password' type='password' className='w-full bg-WhiteBlack text-Gray p-3 rounded-md border border-LightGolden focus:outline-none focus:ring-2 focus:ring-LightGolden' placeholder='Ingrese contraseña' onChange={(e)=>(SetPassword(e.target.value))} />
                {(Password == '' && Validate) && <p className=' text-red-500 text-sm font-bold mt-1'>Ingrese contraseña</p>}
                </div>

              <div>
                <label htmlFor='confirm-password' className='text-white text-lg'>Confirmar contraseña</label>
                <input id='confirm-password' type='password' className='w-full bg-WhiteBlack text-Gray p-3 rounded-md border border-LightGolden focus:outline-none focus:ring-2 focus:ring-LightGolden' placeholder='Confirmar contraseña'  onChange={(e)=>(SetConfirmPassword(e.target.value))}/>
                {(ConfirmPassword != Password && Validate) && <p className=' text-red-500 text-sm font-bold mt-1'>Las contraseñas deben coincidir</p>}
                </div>

              <button className='w-full bg-LightGolden text-black font-bold py-3 rounded-md hover:bg-opacity-80 transition' onClick={HandlerRegistar}>Crear cuenta</button>
            </form>
        
        </div>
        </div>
      </main>
    </div>
  )
}

export default Register