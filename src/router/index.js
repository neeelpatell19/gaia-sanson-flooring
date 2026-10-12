import HomeRoutes from '../components/HomeRoutes/HomeRoutes.vue'
import CategoriesRoutes from '../components/OtherComponents/Categories/CategoriesLayout/Categories.vue'
import CategoryDetail from '../components/OtherComponents/Categories/CategoriesLayout/CategoryDetail.vue'
import AnimationDemo from '../components/FramerAnimation/AnimationDemo.vue'
import AboutUs from '../components/OtherComponents/About/About.vue'
import Tools from '../components/OtherComponents/Tools/Tools.vue'
import DynamicArtificialPage from '../components/OtherComponents/Categories/Layouts/DynamicArtificialPage/DynamicArtificialPage.vue'
import Blogs from '../components/OtherComponents/Blogs/Blogs.vue'
import BlogDetail from '../components/OtherComponents/Blogs/BlogDetail/BlogDetail.vue'
import NotFound from '../components/OtherComponents/NotFound/NotFound.vue'
import { isValidBlog, isValidCategory, isValidGrassType } from '../seo/pages.js'

// vite-ssg creates the router (browser history in the browser, memory
// history while pre-rendering), so this file exports the options only.
export const routes = [
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
        props: true
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
    {
        // Any other URL. The page is rendered with a noindex tag, and the
        // host serves it as 404.html with a 404 status.
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

// Routes whose :param must be one of the known pages. Without this check
// /categories/anything would show an empty page, and any grass type would
// show the landscape grass page: duplicate content a crawler can index.
const PARAM_CHECKS = {
    CategoryDetail: ['slug', isValidCategory],
    DynamicArtificialPage: ['grassType', isValidGrassType],
    BlogDetail: ['slug', isValidBlog],
}

// to.path is already percent-encoded and vue-router encodes params again,
// so decode first or /caf%C3%A9 would become /caf%25C3%25A9.
const decodeSegment = (segment) => {
    try {
        return decodeURIComponent(segment)
    } catch {
        return segment
    }
}

// Router-level guard: send an unknown slug to the 404 page, keeping the URL.
export function guardUnknownContent(to) {
    const check = PARAM_CHECKS[to.name]
    if (!check) return true
    const [param, isValid] = check
    if (isValid(to.params[param])) return true
    return {
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/').map(decodeSegment) },
        query: to.query,
        hash: to.hash,
    }
}

export const scrollBehavior = (to, from, savedPosition) => {
    // Back / forward restores the position.
    if (savedPosition) return savedPosition
    // A link to #section scrolls to it, clear of the fixed navigation bar.
    if (to.hash && document.getElementById(to.hash.slice(1))) {
        return { el: to.hash, top: 110, behavior: 'smooth' }
    }
    // Every new page starts at the top.
    return { top: 0 }
}
