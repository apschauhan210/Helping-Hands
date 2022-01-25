import { ClientService } from './../client.service';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Client } from '../client';
import { HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router ,private dataService: DataService, private appComponenet: AppComponent) { }

  ngOnInit(): void {
  }

  imgData!: string;

  encode(event: any): void {
    console.log('Encoding...');
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.imgData = event.target.result;
          // console.log(this.imgData);
          // localStorage.setItem('imgData', this.imgURL);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(addClient: any): void {
    console.log(addClient.value);
    addClient.value.imgData = this.imgData;
    this.clientService.addClient(addClient.value).subscribe(
      (response: Client) => {
        // console.log(response); 
        window.alert("You are registered successfully"); 
        this.router.navigateByUrl("/helpingHands").then(() => {
          window.location.reload();
        });
        this.dataService.setLoggedClient(response);
        addClient.reset(); this.uncheckAll();       
      },
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }

  @ViewChildren("checkBox") checkboxes!: QueryList<ElementRef>;
  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

}
