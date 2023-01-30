import React, { useEffect, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import './style.css';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Key, UserCircleGear } from 'phosphor-react';

interface TabProfileProps {
  userName?: string;
  email?: string;
  telefone?: string;
  sexo?: string;
}

export function TabProfile({ ...props }: TabProfileProps) {
  
  return (
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
              <input className="Input" id="name" defaultValue={props.userName} />
            </fieldset>
            <fieldset disabled className="Fieldset">
              <label className="Label" htmlFor="email">
                Email:
              </label>
              <input className="Input" id="email" defaultValue={props.email} />
            </fieldset>
          </div>
          <div className="flex-1">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Sexo:
              </label>
              <RadioGroup.Root className="RadioGroupRoot" defaultValue={props.sexo} aria-label="View density">
                <div className='flex items-center'>
                  <RadioGroup.Item className="RadioGroupItem" value='M' id="r1">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                  </RadioGroup.Item>
                  <p className="text-aux-500">
                    Masculino
                  </p>
                </div>
                <div className='flex items-center'>
                  <RadioGroup.Item className="RadioGroupItem" value='F' id="r2">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                  </RadioGroup.Item>
                  <p className="text-aux-500">
                    Feminino
                  </p>
                </div>
              </RadioGroup.Root>
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="telefone">
                WhatsApp:
              </label>
              <input className="Input" id="telefone" defaultValue={props.telefone} />
            </fieldset>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className="Button green">Salvar</button>
        </div>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <p className="Text">Para alterar sua senha, preencha os campos abaixo.</p>
        {/* <fieldset className="Fieldset">
          <label className="Label" htmlFor="currentPassword">
            Current password
          </label>
          <input className="Input" id="currentPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="newPassword">
            New password
          </label>
          <input className="Input" id="newPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input className="Input" id="confirmPassword" type="password" />
        </fieldset> */}
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className="Button green">Alterar Senha</button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  )
}

