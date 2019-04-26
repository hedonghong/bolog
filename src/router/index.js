import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import List from '@/components/List/List'
import Detail from '@/components/Detail/Detail'

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
    }, {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }]
})
