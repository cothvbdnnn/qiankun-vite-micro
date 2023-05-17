import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

let app

const render = (container) => {

  app = createApp(App)

  app.mount(container ? container.querySelector('#subapp') : '#subapp')
  
}

const initQianKun = () => {
  renderWithQiankun({
   async mount(props)  {
      const { container } = props
      render(container)
    },
    bootstrap() { },
    unmount() {
      app.unmount()
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()

