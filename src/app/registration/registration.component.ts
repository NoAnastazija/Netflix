import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  template:`
  <section class="hero is-danger is-bold">
    <div class="hero-body">
    <div class="container">
        <h1 class="title">REGISTRIRAJ SE!</h1>
    </div>
    </div>
</section>

<!--nameInput.valid
nameInput.invalid
nameInput.dirty
nameInput.touched
nameInput.untouched-->

<section class="section">
    <div class="container">

        
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">

            
        <div class="field">
        <label class="label">Ime</label>
        <input type="text" name="ime" class="input" [(ngModel)]="ime"
        #imeInput="ngModel"
        required>

        <div class="help is-error" *ngif="imeInput.invalid && imeInput.touched">
          Potrebno je vase ime
        </div>
        </div>

    
        <div class="field">
        <label class="label">Priimek</label>
        <input type="text" name="priimek" class="input" [(ngModel)]="priimek"
         #priimekInput="ngModel"
        required>

        <div class="help is-error" *ngif="priimekInput.invalid && priimekInput.touched">
      Potreben je vas priimek
        </div>
        </div>


            <div class="field">
                <label class="label">Uporabnisko ime</label>
                <input type="text" name="name" class="input" [(ngModel)]="name"
                #nameInput="ngModel"
                required>

                <div class="help is-error" *ngif="nameInput.invalid && nameInput.touched">
                  Potrebno je vase uporabnisko ime
                </div>
            </div>
            
            <div class="field">
                <label class="label">Email</label>
                <input type="email" name="email" class="input" [(ngModel)]="email"
                #emailInput="ngModel"
                required
                email>

                <div class="help is-error" *ngif="emailInput.invalid && emailInput.touched">
                  Potrebno je vas email
                </div>
            </div>

            <div class="field">
                <label class="label">Geslo</label>
                <input type="password" name="password" class="input" [(ngModel)]="password"
                #passwordInput="ngModel"
                required>

                <div class="help is-error" *ngif="passwordInput.invalid && passwordInput.touched">
                Potrebno je vase geslo
              </div>
            </div>

            

            <button type="submit" class="button is-large is-warning"
            [disabled]="contactForm.invalid">
                Pošlji!
            </button>
        </form>
    </div>
</section>
  `,
  styles: []
})
export class RegistrationComponent implements OnInit {
ime!: string;
priimek!: string;
email!: string;
name!: string;
password!: string;

constructor() {
}
ngOnInit() {
}
submitForm() {
  const message = `Moje uporabnisko ime je ${this.name}`;
  alert(message)
}
}

