import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css'
})
export class IncrementComponent implements OnInit{
  @Output() increment= new EventEmitter();

  constructor() {}
    
    ngOnInit(): void {}
  
}