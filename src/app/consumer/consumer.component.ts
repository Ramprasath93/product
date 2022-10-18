import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

deliveredData:any;

isDelivered:boolean=false;

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.deliveredItem()
    
  }

  dataDeliver(){
    this.isDelivered=(this.isDelivered==false)?true:false;
  }
  
deliveredItem(){

  this.service.getDelivery().subscribe((res)=>{
    this.deliveredData=res;

  })

}
}
