import { createApp } from 'vue'
import App from './App.vue'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'
import { setupStore } from './store/index'
import { useUserStoreHook } from './store/modules/user'

let app

const render = (container) => {

  app = createApp(App)

  setupStore(app)

  app.mount(container ? container.querySelector('#subapp') : '#subapp')
  
}

const initQianKun = () => {
  renderWithQiankun({
   async mount(props)  {
      const { container, userState } = props
      render(container)
      useUserStoreHook().updateState(userState)
    },
    bootstrap() { },
    unmount() {
      app.unmount()
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
