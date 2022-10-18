import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quality-inspector',
  templateUrl: './quality-inspector.component.html',
  styleUrls: ['./quality-inspector.component.scss']
})
export class QualityInspectorComponent implements OnInit {

  inspectValueLocal:any;

  statusPost:any;

// forInspection:boolean=false;

  constructor(private service:ApiService,private route:Router) { 
   
  }

  ngOnInit(): void {
 
    this.service.getProduct().subscribe((res)=>{
      this.inspectValueLocal=res;
      console.log(res);
      
  })

    
  }

  // hideInspection(){
  //   this.forInspection=true
  // }

routerCheck(){
 
  this.service.isInspected=true;
 

  }

  // verfiedProduct(verified:any){

  //   console.log(verified);
  
  //   let payload:any={
  
  //     status:'Verified',
  
  //     idproduct:verified.idproduct
  
  
  //   }
  
  // console.log(payload);
  
  // this.service.statusPostProduct(payload).subscribe((res)=>{
  
  // this.statusPost=res;
  
  
  
  // })
  
  // alert('Product verified Successfully')
  
  
  // }

 

}
