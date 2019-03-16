import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';



const appRoutes: Routes = [
    
    { path: '', component: PagesComponent },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    
    
    { path: '**', component: NopagesfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );