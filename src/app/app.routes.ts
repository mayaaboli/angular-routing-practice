import { Routes } from '@angular/router';
import { PostList } from './post-list/post-list';
import { App } from './app';
import { Home } from './home/home';
import { SingleComponent } from './single-component/single-component';

export const routes: Routes = [
    {path:'',component: Home},
    {path :'posts', component: PostList},
    {path:'post/:id/:name',component:SingleComponent}
];
