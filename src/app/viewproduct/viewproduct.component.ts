import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {

  getValue:any;

  delValue:any;

  constructor(private service:ApiService) {
    this.ngOnInit();
   }

  ngOnInit(): void {
     
    this.getViewProd();
  
  }

  getViewProd(){
    this.service.getProduct().subscribe((res)=>{
      this.getValue=res;
      console.log(res);
      
  })

  }

  demo(){
    this.service.isUpdate=true;
    this.service.isInspected=false;
  }
  productDelete(idproduct:number){
    this.service.delProduct(idproduct).subscribe((res)=>{

      this.delValue=res.message;

      console.log(res,"res-->");

      alert("Product Data deleted Successfully")

      this.getViewProd();
      

    })
  }

}
