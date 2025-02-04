import { Routes } from '@angular/router';

export const routes: Routes = [
    // routing : {path: "", loadChildren: ""}
    // blog module lazy loading
    {
        path: "blogs",
        loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule),
    },
    // user module lazy loading
    {
        path: "user",
        loadChildren: () => import("./user/user.module").then(m => m.UserModule),
    },
    //default route
    {
        path: "",
        redirectTo: "blogs",
        pathMatch: "full",
    }
];
