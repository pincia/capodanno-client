import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.page.html',
  styleUrls: ['./elenco.page.scss'],
})
export class ElencoPage implements OnInit {
  private tickets;
  primaryColor = "#111111"
interval:any;
  constructor(private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router:Router,
    public alertController: AlertController,
    private navController:NavController,
    
    private reactive:ReactiveFormsModule,
    private http:HttpClient) {
console.log(environment.url+"prevendite")


    
   this.fetchData()
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.interval = setInterval(() => { this.fetchData() }, 2000);
    this.fetchData()
  }
  ionViewWillLeave(){
  clearInterval(this.interval)
  }
  fetchData(){
    this.http.get(environment.url+"prevendite" )
    .subscribe(data => {
  this.tickets=data;
      console.log(data);
     }, error => {
    
      console.log(error);
    });
  }
  async presentAlert(titolo,message,id,action) {
    const alert = await this.alertController.create({
      header: titolo,
      subHeader: '',
      message: message,
      buttons: [{
        text: 'OK',
        handler: () => {
        if (action ==0){
          this.sendmail_action(id)
        }
        if (action ==1){
         this.delete_action(id)
        }
        }
      },
      {
        text: 'ANNULLA',
        handler: () => {
        console.log('ANNULLATA');
        }
      }]
    });

    await alert.present();
  }
  delete(ticket){
    this. presentAlert("ATTENZIONE","ELIMINARE LA PREVENDITA di "+ticket.nome+" "+ticket.cognome+"?",ticket.id,1);
   
   }
  
   getHeaderStyle() {
    return { background: this.primaryColor, color : '#cda434' };
  }

  delete_action(id){
    this.http.get(environment.url+"eliminaprevendita/"+id+"/"  )
    .subscribe(data => {
      this.presentToast("PREVENDITA ELIMINATA");
     }, error => {
      this.presentToast("PREVENDITA NON ELIMINATA");
      console.log(error);
 
    });
  }
  sendmail_action(id){
    this.http.get(environment.url+"emailprevendita/"+id+"/"  )
    .subscribe(data => {
      this.presentToast("EMAIL INVIATA");
      console.log(data);
     }, error => {
      this.presentToast("EMAIL NON INVIATA");
      console.log(error);
 
    });
  }
  sendmail(ticket){
   this. presentAlert("ATTENZIONE","INIVARE EMAIL CON PREVENDITA A "+ticket.nome+" "+ticket.cognome+"?",ticket.id,0)
   
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
