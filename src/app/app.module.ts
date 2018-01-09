import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule
       } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { CardIndexComponent } from './components/card/card-index/card-index.component';
import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './components/admin/admin.component';
import { PieChartComponent } from './components/admin/pie-chart/pie-chart.component';
import { AddCompanyFormComponent } from './components/admin/add-company-form/add-company-form.component';

import { AuthService } from './services/auth.service';
import { CardService } from './services/card.service';
import { AuthGuard } from './guards/auth.guard';
import { CompanyService } from './services/company.service';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component: AdminComponent },


  { path: 'card', canActivate: [AuthGuard], children: [
        { path: '', component: CardIndexComponent },
        { path: 'create', component: CardCreateComponent }
  ]
  },

  { path: '**', component: RegistrationComponent }
]


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
    AddCompanyFormComponent
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
    MatTableModule
  ],
  providers: [
    AuthService,
    CardService,
    CompanyService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
