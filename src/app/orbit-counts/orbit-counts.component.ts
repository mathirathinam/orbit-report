import { Component, OnInit , Input  } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  count: number;
total : number;
  constructor() {

  }
  counts(type: String):number{
    console.log(this.satellites.length);
    this.count = 0;
   

    for(let i=0;i<this.satellites.length;i++){
      
      if(this.satellites[i].type.toLowerCase() === type.toLowerCase()){
        console.log(this.satellites[i].type);
        this.count++;
      }
      else if(type === "Total"){
        this.count++;
      }
     
    }
    console.log("count" + this.count);
    return this.count;
  }

  ngOnInit() {
  }

}
