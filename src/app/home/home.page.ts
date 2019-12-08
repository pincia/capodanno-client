import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cssClass: string;
  primaryColor='#111111';
  secondryColor = '#0163fc';
  fullWhiteLogo = "assets/images/logo.png";
  dynamicColor="#111111"
  constructor() { }

  ngOnInit() {
  }
  getstyle() {
    return {
      background:
        "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
    };
  }
  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  }
  getHeaderStyle() {
    return { background: this.primaryColor };
  }
  getFontstyle() {
    return { color: '#111111' };
  }
}
