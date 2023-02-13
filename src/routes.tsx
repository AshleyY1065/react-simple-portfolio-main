import {ReactNode} from "react";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";

export interface Route {
    path: string;
    component: ReactNode;
    exact: boolean;
}

export const routes: Route[] = [
    {
        path: '/',
        component: <HomePage />,
        exact: true,
    },
    {
        path: '/work',
        component: <WorkPage />,
        exact: true,
    },
    {
        path: '/about',
        component: <AboutPage />,
        exact: true,
    },
    {
        path: '/blog',
        component: <BlogPage />,
        exact: true,
    },
    {
        path: '/contact',
        component: <ContactPage />,
        exact: true,
    }
];
