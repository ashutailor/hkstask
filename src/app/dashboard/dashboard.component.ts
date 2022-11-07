import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name : any;

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("email")
}
  }

 
