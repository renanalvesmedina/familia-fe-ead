import React, { FormEvent, useState } from 'react'
import { MenuProfile } from '../../../components/MenuProfile'
import { PlusCircle } from 'phosphor-react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserModel } from '../../../models/UserModel';
import { api } from '../../../services/api';
import { Sidebar } from '../../../components/Sidebar';

export function CreateUser() {
  const _navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('M');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profiles, setProfiles] = useState<string[]>([]);

  function handleGenderChange(e: any) {
    setGender(e.target.value);
  }

  function addProfileChange(profile: string) {
    console.log(profile);
    if(profiles.includes(profile)) {
      return;
    }
    
    profiles.push(profile);
    setProfiles(profiles);
    console.log(profiles);
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

    if(password.trim() != confirmPassword.trim()) {
      toast.error('As senhas precisam ser iguais!');
      return;
    }

    var userModel = new UserModel(name, email, password, phone, gender, profiles);

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
      <div className="flex bg-zinc-100">
        <Sidebar menuActived="Usuários" />

        <div className="w-full">
          <div className="flex px-8 h-20 w-full items-center justify-between shadow bg-white">
            <span className="text-2xl font-bold">Criar Usuário</span>
            <MenuProfile />
          </div>
          
          <div className="flex flex-col p-4 mt-4 gap-4">
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
                />

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

                <div className="flex w-full gap-2">
                  <div className="flex-1">
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
                  </div>

                  <div className="flex-1">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-semibold text-gray-900">
                      Confirme a Senha:
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={e => setConfirmPassword(e.target.value)}
                      required
                      placeholder="••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4"
                    />
                  </div>
                </div>

                <label htmlFor="profile" className="block mb-2 text-sm font-semibold text-gray-900">
                  Perfil:
                </label>
                <div className="flex gap-2">
                  <input type="checkbox" name="student" onChange={() => addProfileChange("Student")}  className="checkbox" /> <span className="text-zinc-900 mr-4">Aluno</span>
                  <input type="checkbox" name="admin" onChange={() => addProfileChange("Admin")}  className="checkbox" /> <span className="text-zinc-900">Administrador</span>
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
        </div>
      </div>
    </>
  )
}
