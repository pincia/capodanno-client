import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.page.html',
  styleUrls: ['./inserimento.page.scss'],

})
export class InserimentoPage implements OnInit {
person = {};
tipo ={}
tipi = ["CENA","DOPOCENA"];
private selectedItem;
private itemsArray;
private insertForm: FormGroup;
public displaySpinner:string;
private user_id;
primaryColor = "#111111"
disableButton;


  constructor(private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router:Router,
    private navController:NavController,
    private reactive:ReactiveFormsModule,
    private storage:Storage,
    private http:HttpClient) { 
      this.itemsArray=[
        {
          "name":"CENA",
          "id":0
        },
        {
          "name":"DOPOCENA",
          "id":1
        }
      ]
      this.selectedItem = this.itemsArray[1];
    this.insertForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['',Validators.required],
      price:['',Validators.required]
    });
    this.storage.get("user_id").then(res => {
      if(res){
              this.user_id = res;
        }
      })

  }

  ngOnInit() {
  }
  public onItemSelection(event) {
 
     this.selectedItem = event.target.value
    }

      

    insert() {
    var name = this.person['nome']
    var surname = this.person['cognome']
    var price = parseInt(this.person['importo'])
    var email = this.person['email']
    var tipo =this.selectedItem
    
   
    
    
    let person = {"nome": name, "cognome": surname,"importo":price, "email": email,"id_utente":""+ this.user_id,"tipo":1};
    console.log(person);
     this.http.post(environment.url+"creaprevendita", person )
    .subscribe(data => {
  
   
      this.presentToast("PREVENDITA INSERITA CORRETTAMENTE");
      this.navController.navigateForward("/elenco") 
      this.disableButton = false;
      this.insertForm.reset();
 
     }, error => {
      this.presentToast("PREVENDITA NON INSERITA");
      this.disableButton = false;
      this.insertForm.reset();
 
    });
    
 
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  getHeaderStyle() {
    return { background: this.primaryColor, color: '#cda434' };
  }
  truthClick() {
   this.disableButton = true;
    }
}
