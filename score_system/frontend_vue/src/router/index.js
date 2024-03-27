import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "../views/Index";
import Subject_Adder from "../views/Subject_Adder";
import Subject_Manager from "../views/Subject_Manager";
import Subject_Update from "../views/Subject_Update";

Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    name: "Manage Subject",
    show: true,
    component: Index,
    redirect: "/Subject_Manager",
    children: [
      {
        path: "/Subject_Manager",
        name: "Search Subject",
        component: Subject_Manager
      },
      {
        path: "/Subject_Adder",
        name: "Add Subject",
        component: Subject_Adder
      }
    ]
  },
  {
    path: '/Update',
    component: Subject_Update,
    show: false
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
