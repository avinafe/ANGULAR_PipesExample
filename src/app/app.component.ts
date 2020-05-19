import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: String = 'Pipes - Exercises Sheet';
  dateInMilisec: Date = new Date();
  timeInSecs0: number = 61;
  timeInSecs1: number = 305;
}
