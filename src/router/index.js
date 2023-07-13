import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import NinthGenerationView from "@/views/NinthGenerationView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexView,
            redirect: '/first-gen',
            children: [
                {
                    path: '/first-gen',
                    name: 'Generation I',
                    component: () => import('../views/FirstGenerationView.vue')
                },
                {
                    path: '/second-gen',
                    name: 'Generation II',
                    component: () => import('../views/SecondGenerationView.vue')
                },
                {
                    path: '/third-gen',
                    name: 'Generation III',
                    component: () => import('../views/ThirdGenerationView.vue')
                },
                {
                    path: '/fourth-gen',
                    name: 'Generation IV',
                    component: () => import('../views/FourthGenerationView.vue')
                },
                {
                    path: '/fifth-gen',
                    name: 'Generation V',
                    component: () => import('../views/FifthGenerationView.vue')
                },
                {
                    path: '/sixth-gen',
                    name: 'Generation VI',
                    component: () => import('../views/SixthGenerationView.vue')
                },
                {
                    path: '/seventh-gen',
                    name: 'Generation VII',
                    component: () => import('../views/SeventhGenerationView.vue')
                },
                {
                    path: '/eighth-gen',
                    name: 'Generation VIII',
                    component: () => import('../views/EighthGenerationView.vue')
                },
                {
                    path: '/ninth-gen',
                    name: 'Generation IX',
                    component: NinthGenerationView
                },

            ]
        },
    ]
})

export default router
