import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ClientService } from '../client.service';
import { DataService } from '../data.service';
import { Helper } from '../helper';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-helper-login',
  templateUrl: './helper-login.component.html',
  styleUrls: ['./helper-login.component.css']
})
export class HelperLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private helperService: HelperService, private dataService: DataService, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  onSubmit(helperLogin: any): void {
    console.log(helperLogin.value);
    this.helperService.getHelperByEmail(helperLogin.value.email).subscribe(
      (response: Helper) => {
        // console.log(response);
        if(response.password === helperLogin.value.password) {
          // console.log(response);
          this.dataService.setLoggedHelper(response);
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
