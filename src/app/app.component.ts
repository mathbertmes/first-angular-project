import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  points = 0

  increment(){
    this.points = this.points + 1
  }

  decrement(){
    this.points = this.points - 1
  }
}
