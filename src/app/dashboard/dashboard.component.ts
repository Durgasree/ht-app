import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dashboardService: DashboardService) {}

  ngOnInit() {
    this.getHomePage()
  }

  getHomePage() {
    this._dashboardService.getHomepage().subscribe(res => {
      if(res.status == 401){
        console.log("testing1");
      }
      else {
        console.log("testing");
      }
    })
  }

}
