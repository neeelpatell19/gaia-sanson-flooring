import HomeRoutes from '../components/HomeRoutes/HomeRoutes.vue'
import CategoryDetail from '../components/OtherComponents/Categories/CategoriesLayout/CategoryDetail.vue'
import AnimationDemo from '../components/FramerAnimation/AnimationDemo.vue'
import AboutUs from '../components/OtherComponents/About/About.vue'
import Tools from '../components/OtherComponents/Tools/Tools.vue'
import DynamicArtificialPage from '../components/OtherComponents/Categories/Layouts/DynamicArtificialPage/DynamicArtificialPage.vue'
import Blogs from '../components/OtherComponents/Blogs/Blogs.vue'
import BlogDetail from '../components/OtherComponents/Blogs/BlogDetail/BlogDetail.vue'
import NotFound from '../components/OtherComponents/NotFound/NotFound.vue'
import CarpetTileDesign from '../components/OtherComponents/Categories/Layouts/CarpetTilesLayout/CarpetTileDesign.vue'
import LegalPage from '../components/OtherComponents/Legal/LegalPage.vue'
import { CATEGORY_SLUGS, isValidBlog, isValidBlogPage, isValidCategory, isValidDesign, isValidGrassType } from '../seo/pages.js'

// vite-ssg creates the router (browser history in the browser, memory
// history while pre-rendering), so this file exports the options only.
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeRoutes
    },
    {
        // Category pages sit at the root with keyword URLs: /carpet-tiles,
        // /broadloom-carpets, /acoustic-pet-panels, /artificial-grass. The old
        // /categories/... URLs 301 here (vercel.json).
        path: `/:slug(${CATEGORY_SLUGS.join('|')})`,
        name: 'CategoryDetail',
        component: CategoryDetail,
        props: true
    },
    {
        // One page per carpet tile design, e.g. /carpet-tiles/cobble.
        path: '/carpet-tiles/:design',
        name: 'CarpetTileDesign',
        component: CarpetTileDesign,
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
        path: '/terms',
        name: 'Terms',
        component: LegalPage,
        props: { page: 'terms' }
    },
    {
        path: '/privacy-policy',
        name: 'Privacy',
        component: LegalPage,
        props: { page: 'privacy' }
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
        // Later pages of the blog index: /blogs/page/2, /blogs/page/3 ...
        path: '/blogs/page/:page(\\d+)',
        name: 'BlogsPage',
        component: Blogs,
        props: true
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
// /carpet-tiles/anything would show an empty page, and any grass type would
// show the landscape grass page: duplicate content a crawler can index.
const PARAM_CHECKS = {
    CategoryDetail: ['slug', isValidCategory],
    DynamicArtificialPage: ['grassType', isValidGrassType],
    BlogDetail: ['slug', isValidBlog],
    CarpetTileDesign: ['design', isValidDesign],
    BlogsPage: ['page', isValidBlogPage],
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
    // Paging through the blog index keeps the place: the page itself scrolls
    // smoothly to the article list, as it did before pages had their own URLs.
    const BLOG_INDEX = ['Blogs', 'BlogsPage']
    if (BLOG_INDEX.includes(to.name) && BLOG_INDEX.includes(from.name)) return false
    // Every new page starts at the top.
    return { top: 0 }
}
