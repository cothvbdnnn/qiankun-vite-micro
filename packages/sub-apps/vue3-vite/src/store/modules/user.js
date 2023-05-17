import { defineStore } from 'pinia'
import {store} from '../index'

export const useUser = defineStore('user', {
  state: () => ({
    username: null,
    roles: null,
  }),
  actions: {
    updateState(state)  {
      this.$state = state
    }
  }
})

export function useUserStoreHook() {
  return useUser(store);
}
