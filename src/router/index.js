import { createRouter, createWebHistory } from 'vue-router'
import HomeRoutes from '../components/HomeRoutes/HomeRoutes.vue'
import CategoriesRoutes from '../components/OtherComponents/Categories/CategoriesLayout/Categories.vue'
import CategoryDetail from '../components/OtherComponents/Categories/CategoriesLayout/CategoryDetail.vue'
import AnimationDemo from '../components/FramerAnimation/AnimationDemo.vue'
import AboutUs from '../components/OtherComponents/About/About.vue'
import Tools from '../components/OtherComponents/Tools/Tools.vue'
import DynamicArtificialPage from '../components/OtherComponents/Categories/Layouts/DynamicArtificialPage/DynamicArtificialPage.vue'
import Blogs from '../components/OtherComponents/Blogs/Blogs.vue'
import BlogDetail from '../components/OtherComponents/Blogs/BlogDetail/BlogDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeRoutes
    },
    {
        path: '/categories',
        name: 'Categories',
        component: CategoriesRoutes
    },
    {
        path: '/categories/:slug',
        name: 'CategoryDetail',
        component: CategoryDetail,
        props: true,
        // Add this to ensure proper component re-rendering
        beforeEnter: (to, from, next) => {
            // Force component re-render when slug changes
            if (from.params.slug !== to.params.slug) {
                next()
            } else {
                next()
            }
        }
    },
    {
        path: '/artificial-grass/:grassType',
        name: 'DynamicArtificialPage',
        component: DynamicArtificialPage,
        props: true
    },
    {
        path: '/demo',
        name: 'AnimationDemo',
        component: AnimationDemo
    },
      {
        path: '/tools',
        name: 'Tools',
        component: Tools
    },
      {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/blogs/:slug',
        name: 'BlogDetail',
        component: BlogDetail,
        props: true
    },
    //   {
    //     path: '/services',
    //     name: 'Services',
    //     component: () => import('../components/Services/Services.vue')
    //   },
    //   {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: () => import('../components/Contact/Contact.vue')
    //   }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // If there's a saved position (back/forward navigation), restore it
        if (savedPosition) {
            return savedPosition
        }
        
        // For new page navigation, scroll to top
        if (to.path !== from.path) {
            return { top: 0 }
        }
        
        // Default behavior
        return { top: 0 }
    }
})

export default router 