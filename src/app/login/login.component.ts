import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup  | any;

  loginData:any;



  constructor(private fb:FormBuilder,private service:ApiService,private route:Router) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  loginSubmit(){
   
    

    if(this.form.status=='VALID'){
      console.log(this.form);
      this.service.postLogin(this.form.value).subscribe((res:any)=>{

        console.log(res)

        if(res[0].userrole=='Manufacturer'){
          this.route.navigateByUrl('/manufacturer')
          
        }else if(res[0].userrole=='QualityInspector'){
          this.route.navigateByUrl('/quality')
        }
        else if(res[0].userrole=='Business Analyst'){
          this.route.navigateByUrl('/business')
        }
        else if(res[0].userrole=='Consumer'){
          this.route.navigateByUrl('/consumer')
        }

  

      })
    }
    // else{
    //   alert('error occur')
    // }

  }
}
