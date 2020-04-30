import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
