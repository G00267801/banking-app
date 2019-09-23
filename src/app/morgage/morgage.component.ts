import { Component, OnInit } from '@angular/core';
import { ServicesinterestService }  from '../servicesinterest.service';

@Component({
  selector: 'app-morgage',
  templateUrl: './morgage.component.html',
  styleUrls: ['./morgage.component.css']
})
export class MorgageComponent implements OnInit {

  constructor(private interestService:ServicesinterestService) { }

  Total: number;

  
years: number;

calaulateinterest(): void {
  this.Total = this.interestService.calaulateinterest(this.years)
}

  ngOnInit() {
  }

}


