import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-verifica',
  templateUrl: './verifica.page.html',
  styleUrls: ['./verifica.page.scss'],
})
export class VerificaPage implements OnInit {
  primaryColor="#111111"
  person={}

  constructor(private barcodeScanner: BarcodeScanner,
    private http:HttpClient,
    ) { 

  this.scan();
  }
  ngOnInit() {
  }
  getHeaderStyle() {
    return { background: this.primaryColor, color: '#cda434' };
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
