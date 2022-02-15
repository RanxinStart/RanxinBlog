import { createApp, defineComponent, h, ref } from 'vue'

const App = defineComponent({
    setup() {
        const count = ref(0)
        return {
            count
        }
    },
    render() {
        return h('div',
            [
                h('div',
                    [
                        h('span', "count:" + this.count),
                        h('button', { onClick: () => this.count++ }, "+"),
                    ]),
                h('h1', 'Vue3 + esbuild~')
            ])
    }
})

const app = createApp(App)
app.mount('#app')