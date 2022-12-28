import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { DesrtsComponent } from './desrts/desrts.component';
import { NavigateToHomeComponent } from './navigate-to-home/navigate-to-home.component';
import { FormsModule } from '@angular/forms';
import { AuthGaurd } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AuthChildGuard } from './auth-child.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VegComponent,
    NonvegComponent,
    DesrtsComponent,
    NavigateToHomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbPagination,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
