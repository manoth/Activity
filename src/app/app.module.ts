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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HubComponent } from './hub/hub.component';
import { MeetingroomComponent } from './meetingroom/meetingroom.component';
import { AddroomComponent } from './addroom/addroom.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'room/R01', pathMatch: 'full' },
  { path: 'room/:id', component: MeetingroomComponent},
  { path: 'add', component: AddroomComponent},
  { path: 'hub', component: HubComponent },
  { path: '**', component: ErrorpageComponent }
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
    FooterComponent,
    HeaderComponent,
    HubComponent,
    MeetingroomComponent,
    AddroomComponent,
    BreadcrumbComponent,
    ErrorpageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://127.0.01:3000' },
    { provide: 'SIGNIN_URL', useValue: 'http://203.157.182.15/accountsv2' },
    { provide: AuthHttp, useFactory: getAuthHttp, deps: [Http] },
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
