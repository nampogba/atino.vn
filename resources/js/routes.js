import Index from './components/admin/Index'
import HelloWorld from './components/admin/Hello'
import ContentOne from './components/admin/ContentOne'
import ContentTwo from './components/admin/ContentTwo'

const routes = [
    {
        path: '/',
        component: Index,
        name: 'Index',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: HelloWorld,
            },
            {
                path: 'ContentOne',
                name: 'contentone',
                component: ContentOne,
            },
            {
                path: 'ContentTwo',
                name: 'contentwo',
                component: ContentTwo,
            }
        ]
    }
];

export default routes;
