import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-verifica',
  templateUrl: './verifica.page.html',
  styleUrls: ['./verifica.page.scss'],
})
export class VerificaPage implements OnInit {
  primaryColor="#111111"
  person:any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private http:HttpClient,
    public toastController: ToastController,
    public alertController: AlertController,
    ) { 
        this.person={}
          this.scan();
  }
  ngOnInit() {
  }
  getHeaderStyle() {
    return { background: this.primaryColor, color: '#cda434' };
  }
  conferma(){
  this. presentAlert("ATTENZIONE","CONFERMARE PRESENZA ALL'EVENTO?");

  
}
async presentAlert(titolo,message) {
  const alert = await this.alertController.create({
    header: titolo,
    subHeader: '',
    message: message,
    buttons: [{
      text: 'OK',
      handler: () => {
        this.http.get(environment.url+"conferma/"+ this.person['id'])
        .subscribe(data => {
           
            this. presentToast("PRESENZA CONFERMATA")
            this.person.confermato=1
         }, error => {
          this. presentToast("ERRORE DURANTE LA CONFERMA DELLA PRESENZA")
        });
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

async presentToast(message) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000
  });
  toast.present();
}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.http.get(environment.url+"prevendita/"+ barcodeData['text'])
      .subscribe(data => {
   this.person=data;
        console.log(data);
       }, error => {
      
        console.log(error);
      });
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
