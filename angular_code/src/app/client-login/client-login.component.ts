import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { DataService } from '../data.service';
import { Helper } from '../helper';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private clientService: ClientService, 
    private dataService: DataService,
    private appComponent: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(clientLogin: any): void {
    // console.log(clientLogin.value);
    this.clientService.getClient(clientLogin.value.email).subscribe(
      (response: Client) => {
        // console.log(response);
        if(response.password === clientLogin.value.password) {
          // console.log(response);
          this.dataService.setLoggedClient(response);
          // console.log(this.dataService.loggedClient);
          this.router.navigateByUrl("/helpingHands").then(() => {
            window.location.reload();
          });
        }
        else {
          alert("Sorry, your password was incorrect. Please double-check your password.");
        }
      },
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }

}
