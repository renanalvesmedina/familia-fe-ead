import { FieldInputProps } from './field'
import { array } from '@utils'

import React from 'react'

export const INPUT_TYPES = [
  'text',
  'email',
  'password',
  'cel',
  'tel',
  'cel_tel',
  'cpf',
  'cpf_cnpj',
  'cnpj',
  'rg',
  'number',
  'money',
  'cep',
  'url',
  'crea',
  'kwp',
  'digito',
  'date',
  'search',
  'percentage',
  'credencial',
] as const

export type InputTypes = (typeof INPUT_TYPES)[number]
type Masks = Partial<Record<InputTypes, unknown>>

const masks: Masks = {
  // date: 'DD/MM/YYYY',
  cep: '00000-000',
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  rg: /^\d+$/,
  cel: '(00) 00000-0000',
  tel: '(00) 0000-0000',
  cel_tel: [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }],
  digito: '0',
  number: /^\d+$/,
  money: [
    {
      mask: 'R$ money',
      overwrite: true,
      blocks: {
        money: {
          mask: Number,
          scale: 2,
          thousandsSeparator: '.',
          radix: ',',
          mapToRadix: [','],
          normalizeZeros: true,
          padFractionalZeros: true,
          signed: false,
        },
      },
    },
  ],
  crea: '0.000.000',
  kwp: [
    {
      mask: 'num {kWp}',
      autofix: true,
      eager: true,
      blocks: {
        num: {
          mask: Number,
          scale: 2,
          thousandsSeparator: '.',
          radix: ',',
          mapToRadix: [','],
          normalizeZeros: true,
          padFractionalZeros: true,
          signed: false,
        },
      },
    },
  ],
  percentage: [
    {
      mask: 'num{%}',
      autofix: true,
      eager: true,
      blocks: {
        num: {
          mask: Number,
          scale: 2,
          thousandsSeparator: '.',
          radix: ',',
          mapToRadix: [','],
          normalizeZeros: true,
          padFractionalZeros: true,
          signed: true,
        },
      },
    },
  ],
  cpf_cnpj: [{ mask: '000.000.000-00' }, { mask: '00.000.000/0000-00' }],
  credencial: [
    { mask: '000.000.000-00' },
    { mask: '00.000.000/0000-00' },
    { mask: /^.*$/ },
  ],
}

const realtypes: Record<InputTypes, string> = {
  text: 'text',
  email: 'email',
  password: 'password',
  money: 'text',
  cel: 'tel',
  cnpj: 'text',
  cpf: 'text',
  rg: 'text',
  number: 'text',
  tel: 'tel',
  cep: 'text',
  url: 'text',
  crea: 'text',
  kwp: 'text',
  cpf_cnpj: 'text',
  digito: 'text',
  date: 'date',
  search: 'text',
  percentage: 'text',
  credencial: 'text',
  cel_tel: 'text',
}

const defaultPlaceholders: Record<InputTypes, string> = {
  text: 'João da Silva',
  email: 'joaodasilva@email.com',
  password: '',
  money: 'R$ 0,00',
  cel: '(12) 99345-6789',
  tel: '(12) 3534-6789',
  cpf: '123.456.789-10',
  cnpj: '12.345.678/0001-91',
  rg: '12.345.678-9',
  number: '123',
  cep: '123456-789',
  url: 'exemplo.com.br',
  crea: '1.234.567',
  kwp: '4,00 kWp',
  cpf_cnpj: 'CPF ou CNPJ',
  digito: '0',
  date: '00/00/0000',
  search: 'Pesquise aqui',
  percentage: '0,0%',
  credencial: 'exemplo@exemplo.com',
  cel_tel: '(12) 3456-7891',
}

export const useFieldInput = ({
  name,
  children,
}: Pick<
  React.PropsWithChildren<FieldInputProps<'input'>>,
  'name' | 'children'
>) => {
  const id = React.useMemo(() => `${name}-f`, [name])

  const _children = array(children).filter((v) => !!v)

  const before = _children.filter(
    ({ props: { slot } }: any) => slot === 'before'
  )
  const after = _children.filter(({ props: { slot } }: any) => slot === 'after')

  return {
    masks,
    id,
    before,
    after,
    realtypes,
    defaultPlaceholders,
  }
}
