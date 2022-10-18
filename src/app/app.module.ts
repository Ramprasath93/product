import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { QualityInspectorComponent } from './quality-inspector/quality-inspector.component';
import { BusinessAnalystComponent } from './business-analyst/business-analyst.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ManufacturerComponent,
    QualityInspectorComponent,
    BusinessAnalystComponent,
    ConsumerComponent,
    ViewproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
