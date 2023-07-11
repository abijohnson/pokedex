import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexView,
            children: [
                {
                    path: '/first-gen',
                    name: 'Generation I',
                    component: () => import('../views/FirstGenerationView.vue')
                }
            ]
        },
    ]
})

export default router
