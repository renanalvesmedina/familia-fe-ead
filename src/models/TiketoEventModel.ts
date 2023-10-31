export interface TiketoEventModel {
  categoria_principal_nome: string
  data_hora_inicio: string
  data_hora_termino: string
  descricao: string
  evento_prioridade_exibicao: number
  evento_situacao: string
  id: number
  imagem: string
  local_evento_cidade: string
  local_evento_nome: string
  local_evento_uf: string
  nome: string
}

export interface TiketoEventListModel {
  data: TiketoEventModel[]
}
