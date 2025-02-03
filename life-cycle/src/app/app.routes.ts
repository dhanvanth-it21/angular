import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

    {
        path: "",
        component: PageNotFoundComponent,
    },
    {
        path: "parent",
        component: ParentComponent,
    },
    {
        path: "child",
        component: ChildComponent,
    },
    {
        path: "**",
        redirectTo: "parent",
    },
];
