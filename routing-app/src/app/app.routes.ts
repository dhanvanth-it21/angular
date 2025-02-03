import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { first } from 'rxjs';
import { ChildAComponent } from './child-a/child-a.component';


const lazyLoading = () => import('./child-b/child-b.component').then(c => c.ChildBComponent);

export const routes: Routes = [
    {
        path: 'first',
        title: 'First Component',
        component: FirstComponent,
        children: [
            {
                path: 'child-a',
                title: 'child-A',
                component: ChildAComponent,
            },
            {
                path: 'child-b',
                title: 'Child B',
                loadComponent: lazyLoading,
            },
        ]
    },
    {
        path: 'second',
        title: 'Second Component',
        component: SecondComponent,
    },
    {
        path: '',
        redirectTo: '/first',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: FirstComponent,
    }
];


