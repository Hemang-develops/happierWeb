import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router) {}

  projects = [{
    id: 1,
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  },{
    id: 2,
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  },{
    id: 3,
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  }]
}
