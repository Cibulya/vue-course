import { createRouter,createWebHistory } from  'vue-router';
import Login from './views/Login.vue';
import Forget from './views/Forget.vue';
import DashBoard from './views/Dashboard.vue';
// import Mail from './views/Mail.vue';
import AppEmailBody from './components/AppEmailBody.vue';


//lazy
const Mail = () => import('./views/Mail.vue');

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/login',component: Login, alias:'/'},
        { path: '/forget', component: Forget, meta:{
            cantEnter:true
        }},
        { path: '/dashboard', component: DashBoard , name: 'home',beforeEnter() {

        }},
        { path: '/mail', component: Mail , children: [
            {path:':mailId?' ,component:AppEmailBody, props:true}
        ]},
        {path:'/:notFound(.*)', component: Login}
    ],
    linkActiveClass:['active'],
    linkExactActiveClass:['active']
});

//protect
router.beforeEach((to,from,next)=>{
    if(to.meta.cantEnter) {
        next({name:'home'})
    }else{
        next();
    }
})


router.afterEach((to,from)=>{

})

 export default router;