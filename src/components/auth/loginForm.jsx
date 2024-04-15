import React from 'react'
import {toast} from "sonner"

export const LoginForm = () => {
  
  const submit = (e) =>{
    e.preventDefault();
    const {email, password} = e.target;
    console.log(email.value, password.value);
    if(email.value.trim() === '' || password.value.trim() === ''){
      toast.error("TODOS LOS CAMPOS SON OBLIGATORIOS")
      return ;
    }
  }

  return (
    <div>
      <h3>INICIA SESION</h3>
      <form onSubmit={submit} action="">
        <div>
          <label htmlFor="">CORREO</label>
          <input name='email' type="email"  />
        </div>
        <div>
          <label htmlFor="">CONTRASEÑA</label>
          <input name='password' type="password"  />
        </div>
        <button type='submit'>INICIAR SESION</button>
      </form>
    </div>
  )
}
