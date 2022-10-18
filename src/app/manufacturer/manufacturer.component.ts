import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent implements OnInit {

   
   
 
  
  form:FormGroup | any;

  product:any=[];

  // editButton:any;

  patchProduct:any;

  updateProduct:any;

  statusPost:any;

  
 
  constructor(private fb:FormBuilder,private route:Router,public service:ApiService,private router:ActivatedRoute) {

    // this.editButton=this.service.isEdit
      this.patchProduct=this.router.snapshot.paramMap.get('id');
      console.log(this.patchProduct);

      this.service.getSingleProduct(this.patchProduct).subscribe((res)=>{
        console.log(res);

        this.form.patchValue({
          idproduct:res.Data[0].idproduct,
          department:res.Data[0].department,
          watts:res.Data[0].watts,
          lamps:res.Data[0].lamps,
          quantity:res.Data[0].quantity,
          supervisor:res.Data[0].supervisor,

       



        })

   
        
      })
      
    
   }

  ngOnInit(): void {

    if ( this.service.isInspected == true || this.service.isUpdate == true )
    this.service.isAddProduct=false;
    else
    this.service.isAddProduct=true
   
    this.form=this.fb.group({
      idproduct:[''],
      department:['',Validators.required],
      watts:['',Validators.required],
      lamps:['',Validators.required],
      quantity:['',Validators.required],
      supervisor:['',Validators.required],
      
      status:'Not verified'


    })
  }
  // hide(){
  //   this.isHide=true;
    
  // }

 
  productSubmit(){

    if(this.form.valid){
      let payload:any={
        idproduct:this.form.value.idproduct,
        department:this.form.value.department,
        watts:this.form.value.watts,
        lamps:this.form.value.lamps,
        quantity:this.form.value.quantity,
        supervisor:this.form.value.supervisor,

        
        status:'Not verified'
      }

      this.service.postProduct(payload).subscribe((res)=>{
        this.product=res;
        console.log(this.product);

        alert("Add the Product Successfully")

        this.form.reset();

        
        
      })

      
      
      // this.route.navigateByUrl('/viewproduct')


      
    }else{
      console.log("Data error");
      
    }

  }

  // Update the product

  productUpdate(){

    this.service.updateProduct(this.form.value,this.patchProduct).subscribe((res)=>{
         
          this.updateProduct=res.Data;

          console.log(res);

          alert('Data Updated Successfully');
          // this.route.navigateByUrl('/viewproduct')
          this.form.reset();
          
    })

  }



  verfiedProduct(verified:any){

    console.log(verified);
  
    let payload:any={
  
      status:'Verified',
  
      isVerified:true,
      
      idproduct:verified.idproduct
  
  
    }
  
  console.log(payload);
  
  this.service.statusPostProduct(payload).subscribe((res)=>{
  
  this.statusPost=res;
  
  
  
  })
  
  alert('Product verified Successfully')

this.route.navigateByUrl('/quality')
  
  
  }
  
}
