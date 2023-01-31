import { useEffect, useState } from 'react';
import { Header } from '../components/Header'
import { useAuthContext } from '../contexts';
import avatar from '../assets/avatarDefault.png'
import { api } from '../services/api';
import { UserProfileModel } from '../models/UserProfileModel';
import * as Tabs from '@radix-ui/react-tabs';
import { Key, UserCircleGear } from 'phosphor-react';

export function Perfil() {
  const { profilePicture, userName } = useAuthContext();
  const [user, setUser] = useState<UserProfileModel>();
  const [userSexo, setUserSexo] = useState<string | undefined>();

  useEffect(() => {
    api.get('/v1/Me/profile').then(response => {
      setUser(response.data);
      setUserSexo(user?.sexo);
    });
  }, []);

  function handleChange(event: any) {
    setUserSexo(event.target.value);
  }

  return (
    <main className="w-full h-full">
      <div className="flex items-center w-full h-full flex-col">
        <Header />

        <div className="flex flex-col items-center justify-center w-full gap-20">
          <span className="flex items-center justify-center gap-4">
            <a href="" className="relative block bg-gray-900 w-28 rounded-full group">
              <img src={profilePicture == undefined ? avatar : profilePicture} alt="" title='Alterar Imagem do Perfil' className="absolute inset-0 cursor-pointer rounded-full w-28 object-cover group-hover:opacity-50" />
              <div className="relative">
                <div className="">
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="mt-10">
                      <p className="text-xs text-center">
                        Alterar Imagem do Perfil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <span>
              <p>Olá</p>
              <p className="text-2xl font-bold text-brand-700">{userName}</p>
            </span>
          </span>

          <Tabs.Root className="TabsRoot" defaultValue="tab1">
            <Tabs.List className="TabsList" aria-label="Manage your account">
              <Tabs.Trigger className="TabsTrigger gap-2" value="tab1">
                <UserCircleGear size={28} /> Perfil
              </Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger gap-2" value="tab2">
                <Key size={28} /> Segurança
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="TabsContent" value="tab1">
              <p className="Text">Informações da Conta</p>
              <div className="flex gap-6">
                <div className="flex-1">
                  <fieldset className="Fieldset">
                    <label className="Label" htmlFor="name">
                      Nome:
                    </label>
                    <input className="Input" id="name" defaultValue={userName} />
                  </fieldset>
                  <fieldset disabled className="Fieldset">
                    <label className="Label" htmlFor="email">
                      Email:
                    </label>
                    <input className="Input" id="email" defaultValue={user?.email} />
                  </fieldset>
                </div>
                <div className="flex-1">
                  <fieldset className="Fieldset">
                    <label className="Label" htmlFor="sexo">
                      Sexo:
                    </label>
                    <select value={userSexo} onChange={handleChange} className="Input">
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                    </select>
                  </fieldset>
                  <fieldset className="Fieldset">
                    <label className="Label" htmlFor="telefone">
                      WhatsApp:
                    </label>
                    <input className="Input" id="telefone" defaultValue={user?.telefone} />
                  </fieldset>
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                <button className="Button success">Salvar</button>
              </div>
            </Tabs.Content>

            <Tabs.Content className="TabsContent" value="tab2">
              <p className="Text">Logo poderá redefinir sua senha por aqui...</p>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="currentPassword">
                  Senha atual:
                </label>
                <input disabled className="Input" id="currentPassword" type="password" />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="newPassword">
                  Nova senha:
                </label>
                <input disabled className="Input" id="newPassword" type="password" />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="confirmPassword">
                  Confirme nova senha:
                </label>
                <input disabled className="Input" id="confirmPassword" type="password" />
              </fieldset>
              <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                <button className="Button success">Alterar Senha</button>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </main>
  )
}
