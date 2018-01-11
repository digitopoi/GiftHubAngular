import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule
       } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { CardIndexComponent } from './components/user/card-index/card-index.component';
import { CardCreateComponent } from './components/user/card-create/card-create.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './components/admin/admin.component';
import { PieChartComponent } from './components/admin/pie-chart/pie-chart.component';
import { AddCompanyFormComponent } from './components/admin/add-company-form/add-company-form.component';

import { AuthService } from './services/auth.service';
import { CardService } from './services/card.service';
import { AuthGuard } from './guards/auth.guard';
import { CompanyService } from './services/company.service';
import { UserComponent } from './components/user/user.component';
import { AdminGuard } from './guards/admin.guard';
import {MatSelectModule} from '@angular/material/select';
import{StripeFormComponent} from './components/user/stripe/stripe-form.component';


const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin',  canActivate: [AdminGuard], component: AdminComponent },
  { path: 'user', canActivate: [AuthGuard], component: UserComponent },
  // { path: 'card', canActivate: [AuthGuard], component: },

  // { path: 'card', canActivate: [AuthGuard], children: [
  //       { path: '', component: CardIndexComponent },
  //       { path: 'create', component: CardCreateComponent }
  // ]
  // },

  { path: '**', component: RegistrationComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    CardIndexComponent,
    CardCreateComponent,
    LogoutComponent,
    AdminComponent,
    PieChartComponent,
    AddCompanyFormComponent,
    UserComponent,
    StripeFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [
    AuthService,
    CardService,
    CompanyService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AdminGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
