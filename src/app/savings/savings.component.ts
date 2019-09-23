import { Component, OnInit } from '@angular/core';
import { ServicesinterestService } from '../servicesinterest.service';
@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private InterestService:ServicesinterestService) { }

  Total: number;
years: number;
calculateinterest(): void {
  this.Total = this.InterestService.calaulateinterest(this.years)
}



  ngOnInit() {
  }

}
