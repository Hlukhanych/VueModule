import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/components/HomePage.vue";
import DataUn from "@/components/DataUn.vue";
import ContactsPage from "@/components/ContactsPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/data',
        component: DataUn,
        name: 'datd'
    },
    {
        path: '/contacts',
        component: ContactsPage,
        name: 'contacts'
    }
];

const router =createRouter({history: createWebHashHistory(), routes});

export default router;