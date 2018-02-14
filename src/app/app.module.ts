import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Http Service
import { HttpModule, Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

// Rounting
import { RouterModule, Routes } from '@angular/router';

// Service
import { MainService } from './shared/main.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { HeaderComponent } from './header/header.component';
import { HubComponent } from './hub/hub.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dash1', pathMatch: 'full' },
  { path: 'dash1', component: DashboardComponent},
  { path: 'dash2', component: Dashboard2Component, data: { a: 'aaa', b: 'bbb' } },
  { path: 'dash3', component: Dashboard3Component, data: { a: '111', b: '222' } },
  { path: 'hub', component: HubComponent },
  { path: '**', redirectTo: 'dash1', pathMatch: 'full' }
];

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    globalHeaders: [{ 'Accept': 'application/json' }],
    tokenGetter: (() => localStorage.getItem('token-jwt'))
  }), http);
}


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    FooterComponent,
    Dashboard2Component,
    Dashboard3Component,
    HeaderComponent,
    HubComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://203.157.182.15/eoffice/api' },
    { provide: 'SIGNIN_URL', useValue: 'http://203.157.182.15/accountsv2' },
    { provide: AuthHttp, useFactory: getAuthHttp, deps: [Http] },
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
