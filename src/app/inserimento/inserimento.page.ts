import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.page.html',
  styleUrls: ['./inserimento.page.scss'],
})
export class InserimentoPage implements OnInit {
person = {};
tipi = ["CENA","DOPOCENA"];
private loginForm: FormGroup;
public displaySpinner:string;

  constructor(private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router:Router,
    private http:HttpClient) { 

    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['',Validators.required],
      price:['',Validators.required]
    });
  }

  ngOnInit() {
  }

  insert() {
    var name = this.person['name']
    var surname = this.person['surname']
    var price = this.person['price']
    var email = this.person['email']
    var tipo = this.person['tipo']

    let url:string = "http://192.168.1.109/api/creaprevendita";
    let person = {"nome": name, "cognome": surname,"importo":price, "email": email,"id_utente":1,"tipo":1};
    
     this.http.post(url, person )
    .subscribe(data => {
    
      this.presentToast("PREVENDITA INSERITA CORRETTAMENTE");
     }, error => {
      this.presentToast("PREVENDITA NON INSERITA");
      
    });
    console.log(surname)
    console.log(name)   
     console.log(price)
     console.log(tipo)
 
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
