import Home from 'Pages/Homepage';
import Profile from 'Pages/ProfilePage';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/profile',
        exact: true,
        component: Profile
    }
];