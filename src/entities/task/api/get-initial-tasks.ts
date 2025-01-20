import { Task } from '../model'

type GetInitialTasksResponse = Array<{
  id: number
  title: string
  isDone: boolean
}>

type GetInitialTasksReq = {
  (): Promise<GetInitialTasksResponse>
}

export const getInitialTasksReq: GetInitialTasksReq = () =>
  new Promise((res) =>
    setTimeout(() => {
      res(JSON.parse(localStorage.getItem('tasks') ?? '[]') as Array<Task>)
    }, 3000)
  )
