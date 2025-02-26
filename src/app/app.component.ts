import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ';
  list: any = [];
  textString: string = '';
  isFull: boolean = false;
  lastPicked: string = '';

  change(event: any) {
    this.textString = event.target.value;
    console.log(this.textString);
  }
  push() {
    if (!this.list.includes(this.textString)) {
      this.list.push(this.textString);
      this.lastPicked = '';
    }
  }

  pop() {
    this.list.pop();
  }

  picked() {
    if (this.list.length != 0) {
      this.lastPicked = this.list[this.list.length - 1];
    }
  }
  checkEmpty() {
    this.list.length = 0;
  }

  checkFull() {
    if (this.list.length > 5) {
      this.isFull = true;
    }
  }
}
