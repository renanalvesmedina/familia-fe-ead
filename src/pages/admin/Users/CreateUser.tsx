import React, { FormEvent, useState } from 'react'
import { MenuProfile } from '../../../components/MenuProfile'
import { GraduationCap, List, Student, UsersThree } from 'phosphor-react'
import { Separator } from '@radix-ui/react-dropdown-menu'
import toast from 'react-hot-toast';
import logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { UserModel } from '../../../models/UserModel';
import { api } from '../../../services/api';

export function CreateUser() {
  const _navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('M');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('Student');

  function handleGenderChange(e: any) {
    setGender(e.target.value);
  }

  function handleProfileChange(e: any) {
    console.log('CHANGE PROFILE => ', e.target.value);
    setProfile(e.target.value);
  }


  async function handleCreateUser(e:FormEvent) {
    const toastId = toast.loading('Carregando...');
    e.preventDefault();

    if(name.trim() == '' || name.trim().length <= 3) {
      toast.error('Preencha um nome válido!');
      return;
    }

    if(email.trim() == '') {
      toast.error('Preencha um email válido!');
      return;
    }

    if(password.trim() == '') {
      toast.error('Preencha uma senha válida!');
      return;
    }

    var userModel = new UserModel(name, email, password, phone, gender, profile);

    await api.post('/api/Authentication/Register', userModel)
          .then((res) => {
            console.log(res);
            toast.dismiss(toastId);
            _navigate('/admin/users');
            toast.success('Usuário criado com sucesso :)');
          })
          .catch((err) => {
            toast.dismiss(toastId);
            toast.error(err.response.data.errors[0].message);
          });
  }

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#f7fafc]">
          {/* <!-- Page content here --> */}
          <div className="flex bg-white justify-between pr-8 h-[100px] border-b-[1px]">
            <span className="text-xl font-semibold text-zinc-900 self-start flex items-center h-full gap-2">
              <label htmlFor="my-drawer-2" className="drawer-button ml-2 lg:hidden">
                <List size={32} weight="light" />
              </label>
              <UsersThree size={32} className="hidden lg:block" /> Criar novo usuário
            </span>

            <MenuProfile />
          </div>

          <div className="flex justify-center mt-10">
            
            {/* FORM => */}
            <form className="w-full lg:max-w-2xl p-6 lg:p-0" onSubmit={handleCreateUser}>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900">
                Nome:
              </label>
              <input
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
                required
                placeholder="João Batista"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4"
              />Z

              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900">
                Email:
              </label>
              <input
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="joao@exemplo.com.br"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4"
              />

              <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-900">
                Telefone:
              </label>
              <input
                type="tel"
                name="phone"
                onChange={e => setPhone(e.target.value)}
                placeholder="27999999999"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4"
              />

              <label htmlFor="sexo" className="block mb-2 text-sm font-semibold text-gray-900">
                Sexo:
              </label>
              <select onChange={handleGenderChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4">
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>

              <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900">
                Senha:
              </label>
              <input
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4"
              />

              <label htmlFor="gender" className="block mb-2 text-sm font-semibold text-gray-900">
                Perfil:
              </label>
              <div className="flex gap-2">
                <input type="radio" name="gender" value="Student" className="radio border-1" checked={profile === "Student"} onChange={handleProfileChange} /> <span className="text-zinc-900 mr-4">Aluno</span>
                <input type="radio" name="gender" value="Admin" className="radio border-1" checked={profile === "Admin"} onChange={handleProfileChange} /> <span className="text-zinc-900">Administrador</span>
              </div>

              <div className="flex justify-end w-full gap-2">
                <button
                onClick={() => _navigate('/admin/users')}
                  className="md:w-[20%] text-white bg-zinc-300 hover:bg-gradient-to-bl from-zinc-400 active:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6">
                    Cancelar
                </button>
                <button
                  type="submit"
                  className="md:w-[20%] text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 active:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6">
                    Salvar
                </button>
              </div>
            </form>
            {/* <= FORM */}
          </div>
        
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay">
          </label> 
          <ul className="menu pt-4 w-64 text-base-content bg-white z-50">
            <div className="w-full flex items-center justify-center mb-10">
              <img src={logo} className="w-40" />
            </div>


            {/* <!-- Sidebar content here --> */}
            <li>
              <a className="text-zinc-900 active:bg-brand-700"><Student size={28} weight="light" /> Alunos</a>
            </li>
            <li>
              <a className="text-zinc-900"><GraduationCap size={28} weight="light" /> Cursos</a>
            </li>
          </ul>
        </div>
      </div>
    </>


    
  )
}
