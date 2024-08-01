import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './webservice/service.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
    path:'',
    component:HomeComponent    
    },
    {
        path:'webservice',
    component:ServiceComponent
    },
    {
        path:'about',
    component:AboutComponent
    },
    {
        path:'portfolio',
    component:PortfolioComponent
    },
    {
        path:'contact',
    component:ContactComponent
    }

];
