import { defineStore } from 'pinia'

export const useTask = defineStore('task', {
  state: () => ({
    tasks: [
      {id: 1, title: "buy some milk", isFav: false},
      {id: 2, title: "play Gloomhaven", isFav: true}
    ],
  }),
})