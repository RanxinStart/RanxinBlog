import { createApp, defineComponent, ref } from 'vue'

const App = defineComponent({
    setup() {
        const count = ref(0)
        return {
            count
        }
    },
    render() {
        return (
            <>
                <div>
                    <div>
                        <span>count:{this.count}</span>
                        <button onClick={() => this.count++}>+</button>
                    </div>
                    <h1>Vue3 + esbuild~</h1>
                </div>
            </>
        )
    }
})

const app = createApp(App)
app.mount('#app')