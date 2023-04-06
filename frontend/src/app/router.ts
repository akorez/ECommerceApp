import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path:"login",
        loadComponent:()=> import("./Components/auth/components/login/login.component").then(c=> c.LoginComponent)
    },
    {
        path:"register",
        loadComponent:()=> import("./Components/auth/components/register/register.component").then(c=> c.RegisterComponent)
    },
    {
        path:"",
        loadComponent:()=> import("./Components/layouts/layouts.component").then(c=> c.LayoutsComponent),
        children:[
            {
                path:"",
                loadComponent:()=>import("./Components/home/home.component").then(c=>c.HomeComponent)
            }
        ]
    }
]