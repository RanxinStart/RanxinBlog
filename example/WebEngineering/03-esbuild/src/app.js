import { createApp, defineComponent, h } from 'vue'
// import App from './App.vue'

const App = defineComponent({
    setup() {

    },
    render() {
        return h('h1', 'Vue3 + esbuild~')
    }
})
const app = createApp(App)
app.mount('#app')