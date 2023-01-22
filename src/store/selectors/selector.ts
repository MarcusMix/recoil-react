import { selector } from 'recoil'
import { api } from '../../services/api'
import { atomUser } from '../atoms/atom'

export const userCountSelector = selector({
  key: 'userCountSelector',
  get: async ({get}) => {
    const name = get(atomUser)

    return name.length
  }
})

export const usernameGit = selector({
  key: "usernameGit",
  get: async ({get}) => {
    const user = get(atomUser)

    const {data} = await api({
      baseURL: "https://api.github.com",
    }).get(`/users/${user}`)

    return data
  }
})