import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import { Header } from '../components/Header'
import { useAuthContext } from '../contexts';
import avatar from '../assets/avatarDefault.png'
import { api } from '../services/api';
import { UserProfileModel } from '../models/UserProfileModel';
import * as Tabs from '@radix-ui/react-tabs';
import { Key, UserCircleGear } from 'phosphor-react';
import toast from 'react-hot-toast';
import { Modal } from '../components/Modal';
import { useNavigate } from 'react-router-dom';

export function Perfil() {
  const { userName } = useAuthContext();

  const [showModel, setShowModal] = useState(false);

  const [user, setUser] = useState<UserProfileModel>();
  const [userSexo, setUserSexo] = useState<string | undefined>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [file, setFile] = useState<File | null>();

  useEffect(() => {
    api.get('/v1/Me/profile').then(response => {
      setUser(response.data);
      setUserSexo(response.data.sexo);
    });
  }, []);

  function handleChange(event: any) {
    setUserSexo(event.target.value);
  }

  async function handleEditProfile(event: FormEvent) {
    event.preventDefault();

    if(name.trim() == '') {
      toast.error('Preencha um nome válido!');
      return;
    }

    if(phone.trim() == '') {
      toast.error('Preencha um telefone válido!');
      return;
    }

    var body = {
      fullname: name.trim(),
      phoneNumber: phone.trim(),
      sexo: userSexo
    }

    const request = api.put('/v1/Me/profile', body);

    toast.promise(request, {
      loading: 'Atualizando...',
      success: 'Perfil atualizado com sucesso :)  Faça logoff e login novamente para visualizar os dados atualizados!',
      error: (err) => `${err.response.data.errors[0].message} :(`,
    });
  }

  async function handleResetPassword(event: FormEvent) {
    event.preventDefault();

    if(currentPassword.trim() == '' || newPassword.trim() == '' || confirmPassword.trim() == '') {
      toast.error('Preencha uma senha válida!');
      return;
    }

    var body = {
      currentPassword: currentPassword.trim(),
      newPassword: newPassword.trim(),
      confirmPassword: confirmPassword.trim()
    }
    
    const request = api.post('/v1/Me/password/reset', body);

    toast.promise(request, {
      loading: 'Atualizando...',
      success: 'Senha atualizada com sucesso :)',
      error: (err) => `${err.response.data.errors[0].message} :(`,
    });
  }

  function handleImage(event: ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.item(0));
  }

  async function handleSendPhoto(event: FormEvent) {
    const toastId = toast.loading('Carregando...');
    event.preventDefault();

    if(!file) {
      toast.error('Selecione uma imagem!');
      return;
    }

    await api.put('/v1/Me/profile/avatar', { image: file }, { headers: {'Content-Type': 'multipart/form-data' }})
          .then((res) => {
            toast.dismiss(toastId);
            window.location.reload();
          })
          .catch((err) => {
            toast.dismiss(toastId);
            toast.error(err.response.data.errors[0].message);
          });
  }

  return (
    <Fragment>
      <main className="w-full h-full">
        <div className="flex items-center h-full flex-col">
          <Header />

          <div className="flex flex-col items-center justify-center w-full">
            {/* PROFILE AVATAR AND NAME => */}
            <div className="flex items-center mb-4">
              <label onClick={() => setShowModal(true)} className="cursor-pointer p-2 text-[8px] text-zinc-900 transition hover:opacity-60">
                <img src={user?.profilePicture == undefined ? avatar : user?.profilePicture} alt="" title='Alterar Imagem do Perfil' className="w-20 h-20 rounded-full object-cover" />
              </label>
              
              <div className="flex flex-col">
                <p>Olá</p>
                <p className="text-2xl font-bold text-brand-700">{userName}</p>
              </div>
            </div>
            {/* <= PROFILE AVATAR AND NAME */}

            {/* EDIT PROFILE => */}
            <div className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
              <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full items-center max-w-4xl">
                <div className="w-full">
                  <Tabs.Root className="flex flex-col shadow-sm" defaultValue="tab1">
                    <Tabs.List className="flex flex-shrink-0 border-b-[1px] border-gray-300">
                      <Tabs.Trigger data-ui="active" className="flex flex-1 items-center justify-center rounded-tl-xl bg-gray-900 px-5 h-11 text-white select-none gap-2 border-b-[1px] border-b-gray-200 data-[state=active]:text-brand-700 data-[state=active]:border-b-brand-700" value="tab1">
                        <UserCircleGear size={28} /> Perfil
                      </Tabs.Trigger>

                      <Tabs.Trigger className="flex flex-1 items-center justify-center rounded-tr-xl bg-gray-900 px-5 h-11 text-white font-medium select-none gap-2 border-b-[1px] border-b-gray-200 data-[state=active]:text-brand-700 data-[state=active]:border-b-brand-700" value="tab2">
                        <Key size={28} /> Segurança
                      </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content className="flex-grow p-2" value="tab1">
                      {/* FROM EDITAR PERFIL => */}
                      <div className="py-6 px-6 lg:px-8 text-left w-full">
                        <h3 className="mb-4 text-xl font-medium text-gray-900">Editar Perfil:</h3>
                        
                        <form className="space-y-6" onSubmit={handleEditProfile}>
                          <div className="flex flex-wrap md:flex-nowrap gap-6">

                            <div className="w-full md:w-[50%]">
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Nome:
                              </label>
                              <input
                                type="text"
                                name="name"
                                onChange={e => setName(e.target.value)}
                                defaultValue={userName}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5"
                              />

                              <label htmlFor="email" className="block mb-2 mt-4 text-sm font-medium text-gray-900">
                                Email:
                              </label>
                              <input 
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                disabled
                                className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5"
                              />
                            </div>
                            
                            <div className="w-full md:w-[50%]">
                              <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900">
                                Sexo:
                              </label>
                              <select value={userSexo} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5">
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                              </select>

                              <label htmlFor="telefone" className="block mb-2 mt-4 text-sm font-medium text-gray-900">
                                WhatsApp:
                              </label>
                              <input 
                                type="tel"
                                name="telefone"
                                defaultValue={user?.telefone}
                                onChange={e => setPhone(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5"
                              />
                            </div>
                          </div>
                          
                          <div className="flex justify-end w-full">
                            <button
                              type="submit"
                              className="md:w-[20%] text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 focus:ring-4 focus:outline-none focus:ring-brand-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Salvar
                            </button>
                          </div>
                        </form>
                      </div>
                      {/* <= FROM EDITAR PERFIL */}
                    </Tabs.Content>

                    <Tabs.Content className="flex-grow p-2" value="tab2">
                      {/* FROM ALTERAR SENHA => */}
                      <div className="py-6 px-6 lg:px-8 text-left w-full">
                        <h3 className="mb-4 text-xl font-medium text-gray-900">Alterar Senha:</h3>

                        <form className="space-y-6" onSubmit={handleResetPassword}>
                          <div className="flex flex-col flex-wrap md:flex-nowrap">

                            <div className="w-full">
                              <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium text-gray-900">
                                Senha atual:
                              </label>
                              <input
                                id="currentPassword"
                                type="password"
                                onChange={e => setCurrentPassword(e.target.value)}
                                required
                                placeholder='••••••'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5"
                              />
                            </div>

                            <div className="flex flex-wrap md:flex-nowrap md:gap-6">
                              <div className="w-full md:w-[50%]">
                                <label htmlFor="newPassword" className="block mb-2 mt-4 text-sm font-medium text-gray-900">
                                  Nova senha:
                                </label>
                                <input
                                  id="newPassword"
                                  type="password"
                                  onChange={e => setNewPassword(e.target.value)}
                                  required
                                  placeholder='••••••'
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5"
                                />
                              </div>

                              <div className="w-full md:w-[50%]">
                                <label htmlFor="confirmPassword" className="block mb-2 mt-4 text-sm font-medium text-gray-900">
                                  Confirme a nova senha:
                                </label>
                                <input
                                  id="confirmPassword"
                                  type="password"
                                  onChange={e => setConfirmPassword(e.target.value)}
                                  required
                                  placeholder='••••••'
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-end w-full">
                            <button
                              type="submit"
                              className="md:w-[20%] text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 focus:ring-4 focus:outline-none focus:ring-brand-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Redefinir
                            </button>
                          </div>
                        </form>
                      </div>
                      {/* <= FROM ALTERAR SENHA */}
                    </Tabs.Content>
                  </Tabs.Root>
                </div>              
              </div>
            </div>
            {/* <= EDIT PROFILE */}
          </div>
        </div>
      </main>

      {/* MODAL UPLOAD PROFILE AVATAR => */}
      <Modal isVisible={showModel} onClose={() => setShowModal(false) }>
        <div className="py-6 px-6 lg:px-8 text-left w-full">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Alterar Foto de Perfil:
          </h3>
          <form className="space-y-6" onSubmit={handleSendPhoto}>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-48 h-48 rounded-full border-4 items-center justify-center border-dashed cursor-pointer hover:bg-gray-100 hover:border-gray-300">
                { !file && (
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Selecione uma foto</p>
                  </div>
                )}

                { file && (
                  <img className={`w-48 h-48 object-cover p-2 rounded-full ${file?'opacity-1':'opacity-0'}`} src={file.name ? URL.createObjectURL(file) : undefined} />
                )}

                <input type="file" onChange={handleImage} className="opacity-0" />
              </label>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 focus:ring-4 focus:outline-none focus:ring-brand-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Atualizar
            </button>
          </form>
        </div>
      </Modal>
      {/* <= MODAL UPLOAD PROFILE AVATAR */}

    </Fragment>
  )
}
