import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddComponents: number[] = [];
  evenComponents: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenComponents.push(firedNumber);
    } else {
      this.oddComponents.push(firedNumber);
    }
  }
}
