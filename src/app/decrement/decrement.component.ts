import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrl: './decrement.component.css'
})
export class DecrementComponent implements OnInit{
  @Output() decrement= new EventEmitter();

  constructor() {}
    
    ngOnInit(): void {}
  
}
