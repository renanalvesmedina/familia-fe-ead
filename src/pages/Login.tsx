import { SignIn } from 'phosphor-react';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';
import illustration from '../assets/webinar-amico.svg'
import { useAuthContext } from '../contexts';

interface ILoginProps {
  children: React.ReactNode;
}

export function Login({ children } : ILoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, login } = useAuthContext();

  if(isAuthenticated) return (
    <>{children}</>
  );

  async function handleAuth(event: FormEvent) {
    event.preventDefault();

    if(email.trim() == '') {
      toast.error('Preencha um email válido!');
      return;
    }

    if(password.trim() == '') {
      toast.error('Preencha uma senha válida!');
      return;
    }

    login(email, password);
  }

  return (
    <div className='min-h-screen flex flex-col justify-center bg-zinc-900'>
      <div className='flex justify-center items-center'>
        <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/7ba73aaa-3da9-4cf1-abf2-ccc85dea5875/uid_4688718/WHITE%20YELLOW%20HORIZONTAL.png" className='max-w-[200px]' />
      </div>

      {/* Container Login ==> */}
      <div className='bg-white md:mx-auto mx-4 mt-4 max-w-md md:py-8 py-3 px-10 shadow rounded-lg'>
        <div className='md:mb-10 mb-5 flex justify-center'>
          <img src={illustration} className='md:h-80' />
        </div>

        <form onSubmit={handleAuth}>
          <div className='mb-4'>
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              className="
                h-12 
                mb-2
                rounded-md 
                px-4
                py-3 
                text-zinc-900
                bg-white 
                placeholder-zinc-200 
                border-[1px] 
                border-gray-400 
                hover:border-brand-600 
                w-full 
                focus:border-brand-600 
                focus:ring-brand-600 
                focus:ring-1 
                focus:outline-none"
              placeholder="Email"
            />
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              className="
                h-12 
                mb-4
                rounded-md 
                px-4
                py-3  
                text-zinc-900
                bg-white 
                placeholder-zinc-200 
                border-[1px] 
                border-gray-400 
                hover:border-brand-600 
                w-full 
                focus:border-brand-600 
                focus:ring-brand-600 
                focus:ring-1 
                focus:outline-none"
              placeholder="Senha"
            />
            <button 
              type="submit" 
              className="
              bg-brand-700 
              h-12 
              rounded-md 
              font-semibold 
              text-white 
              pr-8 
              flex 
              justify-center 
              items-center 
              cursor-pointer 
              border-0
              w-full
              hover:bg-gradient-to-bl from-brand-600
              transition-colors"
            >
              <SignIn /> Entrar
            </button>
            <div className="mt-2">
              <p>
                <a href="" className="text-sm text-zinc-900 hover:text-zinc-400">Esqueceu sua senha ?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
