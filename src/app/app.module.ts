import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rounting
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dash1', pathMatch: 'full' },
  { path: 'dash1', component: DashboardComponent},
  { path: 'dash2', component: Dashboard2Component, data: { a: 'aaa', b: 'bbb' } },
  { path: 'dash3', component: Dashboard3Component, data: { a: '111', b: '222' } },
  { path: '**', redirectTo: 'dash1', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    FooterComponent,
    Dashboard2Component,
    Dashboard3Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
