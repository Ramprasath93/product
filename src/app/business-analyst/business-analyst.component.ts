import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-business-analyst',
  templateUrl: './business-analyst.component.html',
  styleUrls: ['./business-analyst.component.scss']
})
export class BusinessAnalystComponent implements OnInit {


 publishProduct:any;

 postPublish:any;

 isPublish:boolean=false;

 postStatus:any;

 isPublished:boolean=false;

 
  constructor(public service:ApiService) { 
  
  }

  ngOnInit(): void {
  
  this.getPublishData();

}

getPublishData(){
  this.service.getPublish().subscribe((res)=>{
    this.publishProduct=res.Data;
    console.log("6757585858786",res);
})
}

publishProd(){
  this.isPublish=(this.isPublish==false)?true:false;
}

// deliverPublish(){
//   this.publish=(this.publish==false)?true:false;
// }

readyForPublish(published:any){

 

  console.log(published);

  this.service.postPublish(published).subscribe((res)=>{

    this.postPublish=res;

    this.isPublished=true;
    this.getPublishData();
  })

  alert('Ready to delivered the items')
  



}



}