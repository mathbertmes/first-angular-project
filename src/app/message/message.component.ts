import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() points: number | undefined;
    constructor() {}
    ngOnInit(): void {}
}
