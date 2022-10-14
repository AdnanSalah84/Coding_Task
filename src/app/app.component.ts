import { Component } from '@angular/core';
import { Nuclide } from './nuclide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nuclides: Nuclide[] = [];
  display: any;
  nuclideName?:string;
  halfLife?:number | any;
  startActivity: number| any;
  oneDay:number = 1;
  tenDay:number=10;
  hundredDay:number=100;
  thousandDay:number=1000;
  totalActivity:number = 0;

  ngOnInit() {

  }

  addNewNuclide(){
    let one:any = (this.startActivity * Math.pow(0.5,(this.oneDay/this.halfLife))).toFixed(2)
    let ten:any = (this.startActivity * Math.pow(0.5,(this.tenDay/this.halfLife))).toFixed(2)
    let hundred:any = (this.startActivity * Math.pow(0.5,(this.hundredDay/this.halfLife))).toFixed(2)
    let thousand:any = (this.startActivity * Math.pow(0.5,(this.thousandDay/this.halfLife))).toFixed(2)
    let dayLessThanOne:number = 0;
    let test : number = 0;

    for (let day = 1; day <= 1000000 ; day++) {
      let resDay:any =  (this.startActivity * Math.pow(0.5,(day/this.halfLife)))

      test =test + resDay;

      if(resDay < 1){
        dayLessThanOne = day
        this.totalActivity += day
        break
      }
    }





    this.nuclides.push({nuclideName:this.nuclideName, halfLife:this.halfLife,
      startActivity:this.startActivity, oneDay:one, tenDay:ten, hundredDay:hundred, thousandDay: thousand, dayLessThanone:dayLessThanOne})
    this.display = false;
    this.nuclideName = ""
    this.halfLife = "";
    this.startActivity = "";
  }

  binarySearchTest() {
    let nums = [1,2,3,4,5,6];
    let target = 4;
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);

      if (nums[mid] === target)
        alert(mid)

      if (target < nums[mid])
        right = mid - 1;
      else
        left = mid + 1;
    }

    //alert("Not found")
  }
}
