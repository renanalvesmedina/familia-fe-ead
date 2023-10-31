export interface HistoryModel {
  course: string
  class: string
  viewDate: string
}

export interface UserHistoryModel {
  userId: string
  name: string
  history: HistoryModel[]
}
