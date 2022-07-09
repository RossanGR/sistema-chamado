import { useState } from 'react';
import './style.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';



function SignIn() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function handleSubmit (e){
    e.preventDefault();
    alert('Cliclou');
  }

    return (
      <div className='container-center'>
        <div className='login'>
          <div className='login-area'>
            <img src={Logo} title="Logo" alt='Logo'/>
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <input type="text" placeholder="email@gmail.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="**********" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit">Acessar</button>
          </form>

          <Link to='/register'>Criar uma conta</Link>
        </div>
      </div>
    );
  }
  
export default SignIn;