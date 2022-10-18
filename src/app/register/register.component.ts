import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:FormGroup | any;

  registerValue:any;
  


  constructor(private fb:FormBuilder,private service:ApiService,private route:Router) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      fullname:['',Validators.required],
      mobileno:['',Validators.required],
      emailid:['',Validators.required],
      password:['',Validators.required],
      userrole:['',Validators.required],

    })

  }



  registerSubmit(){
    if(this.form.valid){
      console.log(this.form.value);

      this.service.postRegister(this.form.value).subscribe((res)=>{
        this.registerValue=res.Data;
        alert('Registration Successfully');

        this.route.navigateByUrl('/login')

      })
      
    }else{
      alert('Registration is not valid')
      
    }

  }

}
