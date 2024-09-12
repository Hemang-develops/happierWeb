import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent {
  @Input() position!: { title: string; salary: number };  // Declare the @Input property
}
