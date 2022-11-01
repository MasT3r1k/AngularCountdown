import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() day!: number;
  @Input() month!: number;
  @Input() year!: number;

  now?: number;
  deadline?: Date;
  countdown?: number;
  remain_months?: number;
  remain_days?: number;
  remain_hours?: number;
  remain_minutes?: number;
  remain_seconds?: number;




  public update(): void {
    this.now = new Date().getTime();

    this.deadline = new Date();
    this.deadline.setDate(this.day);
    this.deadline.setMonth(this.month - 1);
    this.deadline.setFullYear(this.year);
    this.deadline.setHours(0, 0, 0, 0);
    this.countdown = (this.deadline.getTime() > this.now) ? this.deadline.getTime() - this.now : this.now - this.deadline.getTime();
    this.remain_months  = Math.floor(this.countdown / 2629800000);
    this.remain_days    = Math.floor(this.countdown % 2629800000 / 86400000);
    this.remain_hours   = Math.floor(this.countdown % 86400000  / 3600000);
    this.remain_minutes = Math.floor(this.countdown % 3600000  / 60000);
    this.remain_seconds = Math.floor(this.countdown %  60000  / 1000);
  }
  

  constructor() { }

  ngOnInit(): void {
    this.update()
    setInterval(() => {
      this.update()
    }, 200);
  }

}
