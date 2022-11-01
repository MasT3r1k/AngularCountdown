import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth();

  nnnShow: boolean = (this.month == 10);


}
