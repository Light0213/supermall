import Vue from 'vue'
import vueRouter from 'vue-router'
// 路由懒加载
// const Home => import('')

Vue.use(vueRouter)
const routes=[
    {
        path:'',
        component:''
    }
]
const router =  new  vueRouter({
    routes,
    mode:'history'

})
export default router