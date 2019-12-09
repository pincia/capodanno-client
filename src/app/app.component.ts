import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; //import MenuController to access toggle() method.

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  username = "pippo";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public events: Events,
    private menuCtrl:MenuController
  ) {
    this.initializeApp();
    this.events.subscribe('utenteloggato', (data) =>{
      console.log(data)
     this.username=data
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
}
