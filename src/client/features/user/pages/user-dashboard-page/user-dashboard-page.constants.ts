import { whatsappSuportLink } from '@config'

export const welcomeStudentText = (
  gender: 'F' | 'M',
  isUserNotEnrollment: boolean
) => {
  const letter = gender === 'F' ? 'a' : 'o'

  const welcomeText = `Seja muito bem-vind${letter} ao nosso portal de ensino. Precisando de ajuda? Entre em contato com <a href=${whatsappSuportLink} target="_blank" rel="noreferrer"><strong>nosso suporte</strong></a>.`
  const userNotEnrollmentText = `Você ainda não foi matriculad${letter} em um curso. Mas não se preocupe, em breve sua matrícula será efetivada. Qualquer dúvida entre em contato com <a href=${whatsappSuportLink} target="_blank" rel="noreferrer"><strong>nosso suporte</strong></a>.`

  return isUserNotEnrollment ? userNotEnrollmentText : welcomeText
}

// Antes de
// começar, assista à aula inaugural para entender como nossa
// plataforma funciona.
