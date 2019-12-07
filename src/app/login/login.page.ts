import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginForm: FormGroup;
  public displaySpinner:string;
  private users;
  todo = {}
  user = {}
  constructor(private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router:Router,
    ) { 
    console.log("LOGIN CONSTRUCTOR");
    this.displaySpinner="none";
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: [''],
      codice_impianto:['']
    });
    this.users = [
      {
           "utente":"pincia",
           "password":"loureed",
           "id":1
      },
      {
        "utente":"samuele",
        "password":"toro",
        "id":2
      },
      
        {
          "utente":"cammilli",
          "password":"cammi",
          "id":3
        },
      
    ]
  
    
  }
  logForm() {
    var user = this.user['id']
    var password = this.user['password']
    var trovato = false;
    for(var i = 0; i < this.users.length; i++)
{
  console.log("SEARCH "+this.users[i].utente+" - "+ this.users[i].password)
  if(this.users[i].utente == user && this.users[i].password == password)
  {
   
    trovato = true;
    break;
  }
  else{
    trovato = false;
  }
}
  if (trovato){
    this.presentToast("UTENTE LOGGATO")
    this.router.navigate(['/home']);
  
  }
  else{
    this.presentToast("ERRORE UTENTE/PASSWORD")
    this.loginForm.reset();
  }

  }
  ngOnInit() {
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

loginTest(){
  console.log("LOGIN TEST CALLED")
  this.router.navigate(['/home']);
  
}
}
