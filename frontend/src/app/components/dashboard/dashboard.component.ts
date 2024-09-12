import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  projects = [{
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  },{
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  },{
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  }]
}
