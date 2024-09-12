import { Component, OnInit } from '@angular/core';
import { PositionComponent } from '../position/position.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  // Declare the positions array to hold the list of positions in the project
  positions: { title: string; salary: number }[] = [
    { title: 'Software Engineer', salary: 80000 },
    { title: 'Product Manager', salary: 90000 },
    { title: 'Designer', salary: 60000 }
  ];

  project = {
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    positions: this.positions,
    remainingBudget: 200,
    utilizedBudget: 800
  }

  constructor() { }

  ngOnInit(): void {
    // You can initialize or fetch the positions here
  }

  addPosition() {
    // Logic to add a new position to the list
    this.positions.push({ title: 'New Position', salary: 0 });
  }
}
