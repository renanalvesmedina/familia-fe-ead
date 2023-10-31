export type Enrollment = {
  id: number
  codigo: string
  data_hora_criacao: string
  nome_participante: string
  opcao_ingresso_nome: string
  situacao: 'confirmado' | 'cancelado' | 'pendente'
  sobrenome_participante: string
  valor: string
}
