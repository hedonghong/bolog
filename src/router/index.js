import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import List from '@/components/List/List'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/list',
        name: 'List',
        component: List
    }]
})
