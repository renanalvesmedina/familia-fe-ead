import * as yup from 'yup'

import YupPassword from 'yup-password'

YupPassword(yup)

export const validatePassword = () =>
  yup
    .string()
    .typeError('Senha inválida')
    .minNumbers(1, 'A senha deve conter ao menos um número')
    .minLowercase(1, 'A senha deve conter ao menos uma letra minúscula')
    .required('Necessário preencher o campo senha')
    .min(8, 'Senha muito curta, digite pelo menos 8 caracteres')
    .minUppercase(1, 'A senha deve conter ao menos uma letra maiúscula')
    .minSymbols(1, 'A senha deve conter ao menos um caracter especial')

export const validateLogin = yup.object().shape({
  email: yup
    .string()
    .typeError('E-mail inválido')
    .required('O e-mail é obrigatório'),
  password: validatePassword(),
})

export const validateResetPassword = yup.object().shape({
  currentPassword: validatePassword(),
  newPassword: validatePassword(),
  confirmPassword: yup
    .string()
    .typeError('Confirmar senha inválido')
    .oneOf([yup.ref('newPassword'), undefined], 'As senhas não coincidem')
    .required('Confirmar senha é obrigatório'),
})
