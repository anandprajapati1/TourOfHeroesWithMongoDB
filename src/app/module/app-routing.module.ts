import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../component/dashboard.component';
import { HeroesComponent } from '../component/heroes.component';
import { HeroDetailComponent } from '../component/hero-detail.component';
// import { fontResizerDemoComponent } from '../component/font-resizer-demo.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    // { path: 'font-resizer', component: fontResizerDemoComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
