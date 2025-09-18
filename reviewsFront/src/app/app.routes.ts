import { Routes } from '@angular/router';
import {RoutingAuthComponent} from '../app/Components/Fathers/auth/routing-auth/routing-auth.component';
import {RoutingPagesComponent} from '../app/Components/Fathers/auth/routing-pages/routing-pages.component';
import {LoginComponent} from '../app/Components/Auth/login/login.component';
import {RegisterComponent} from '../app/Components/Auth/register/register.component';
import { MyProfileComponent } from './Components/Auth/my-profile/my-profile.component';
import { MyReviewsComponent } from './Components/pages/my-reviews/my-reviews.component';
import { RecommendedComponent} from './Components/pages/recommended/recommended.component';
import { ReviewsComponent } from './Components/pages/reviews/reviews.component'; 
import { AuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
    {
        path: '', component: RoutingAuthComponent,
        children: [
            {path: '', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]
        
    },
    {
        path: '', component: RoutingPagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'my-profile', component: MyProfileComponent},
            {path: 'my-reviews', component: MyReviewsComponent},
            {path: 'recomended', component: RecommendedComponent},
            {path: 'reviews', component: ReviewsComponent}
            
        ]
    }

];
