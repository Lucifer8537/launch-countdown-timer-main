import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
  foldContainer = document.getElementById('countdown');
  seconds = '00';
  minutes = '00';
  hrs = '00';
  days = '09';
  customClass = true;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    setInterval(() => {
      this.foldContainer = document.getElementById('countdown');
      if (this.foldContainer) {
        if (this.foldContainer.classList.contains('fold-animation-close')) {
          this.foldContainer.classList.remove('fold-animation-close');
          this.foldContainer.classList.add('fold-animation-open');
        }
      }
      this.customClass = false;
      this.cdr.detectChanges();
      let second = +this.seconds;
      second -= 1;
      if (second < 0) {
        this.seconds = '59';
        this.minChange();
      } else {
        let secondStr: string = second.toLocaleString();
        if (secondStr.length === 1) {
          secondStr = '0' + secondStr;
        }
        this.seconds = secondStr;
      }
      this.customClass = true;
      setTimeout(() => {
        this.foldContainer = document.getElementById('countdown');
        if (this.foldContainer) {
          this.foldContainer.classList.remove('fold-animation-open');
          this.foldContainer.classList.add('fold-animation-close');
          console.log(this.foldContainer.classList);
        }
        this.cdr.detectChanges();
      }, 200);
    }, 1000);
  }

  minChange = () => {
    let foldminute = document.getElementById('countdown-min');
    if (foldminute) {
      if (foldminute.classList.contains('fold-animation-close')) {
        foldminute.classList.remove('fold-animation-close');
        foldminute.classList.add('fold-animation-open');
      }
    }
    this.customClass = false;
    this.cdr.detectChanges();
    let minute = +this.minutes;
    minute -= 1;
    if (minute < 0) {
      this.minutes = '59';
      this.hrsChange();
    } else {
      let minuteStr: string = minute.toLocaleString();
      if (minuteStr.length === 1) {
        minuteStr = '0' + minuteStr;
      }
      this.minutes = minuteStr;
    }
    this.customClass = true;
    setTimeout(() => {
      foldminute = document.getElementById('countdown-min');
      if (foldminute) {
        foldminute.classList.remove('fold-animation-open');
        foldminute.classList.add('fold-animation-close');
        console.log(foldminute.classList);
      }
      this.cdr.detectChanges();
    }, 200);
  };
  hrsChange = () => {
    let foldhr = document.getElementById('countdown-hrs');
    if (foldhr) {
      if (foldhr.classList.contains('fold-animation-close')) {
        foldhr.classList.remove('fold-animation-close');
        foldhr.classList.add('fold-animation-open');
      }
    }
    this.customClass = false;
    this.cdr.detectChanges();
    let hr = +this.hrs;
    hr -= 1;
    if (hr < 0) {
      this.hrs = '23';
      this.daysChange();
    } else {
      let hrStr: string = hr.toLocaleString();
      if (hrStr.length === 1) {
        hrStr = '0' + hrStr;
      }
      this.hrs = hrStr;
    }
    this.customClass = true;
    setTimeout(() => {
      foldhr = document.getElementById('countdown-hrs');
      if (foldhr) {
        foldhr.classList.remove('fold-animation-open');
        foldhr.classList.add('fold-animation-close');
        console.log(foldhr.classList);
      }
      this.cdr.detectChanges();
    }, 200);
  };
  daysChange = () => {
    let foldday = document.getElementById('countdown-days');
    if (foldday) {
      if (foldday.classList.contains('fold-animation-close')) {
        foldday.classList.remove('fold-animation-close');
        foldday.classList.add('fold-animation-open');
      }
    }
    this.customClass = false;
    this.cdr.detectChanges();
    let day = +this.days;
    day -= 1;
    if (day < 0) {
      this.days = '09';
    } else {
      let dayStr: string = day.toLocaleString();
      if (dayStr.length === 1) {
        dayStr = '0' + dayStr;
      }
      this.days = dayStr;
    }
    this.customClass = true;
    setTimeout(() => {
      foldday = document.getElementById('countdown-days');
      if (foldday) {
        foldday.classList.remove('fold-animation-open');
        foldday.classList.add('fold-animation-close');
        console.log(foldday.classList);
      }
      this.cdr.detectChanges();
    }, 200);
  };
}
