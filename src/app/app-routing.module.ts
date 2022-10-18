import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessAnalystComponent } from './business-analyst/business-analyst.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { LoginComponent } from './login/login.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { QualityInspectorComponent } from './quality-inspector/quality-inspector.component';
import { RegisterComponent } from './register/register.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'manufacturer',component:ManufacturerComponent},
  {path:'manufacturer/:id',component:ManufacturerComponent},
  {path:'quality',component:QualityInspectorComponent},
  {path:'business',component:BusinessAnalystComponent},
  {path:'consumer',component:ConsumerComponent},
  {path:'viewproduct',component:ViewproductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
