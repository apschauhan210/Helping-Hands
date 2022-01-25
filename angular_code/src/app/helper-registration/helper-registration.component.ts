import { domains } from './../constLists';
import { HelperService } from './../helper.service';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Helper } from './../helper';
import { HttpErrorResponse } from '@angular/common/http';
import { states } from 'src/app/constLists';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Byte } from '@angular/compiler/src/util';

declare var makeSubmenu: any;

@Component({
  selector: 'app-helper-registration',
  templateUrl: './helper-registration.component.html',
  styleUrls: ['./helper-registration.component.css']
})
export class HelperRegistrationComponent implements OnInit {

  states = states;

  domainList = domains;

  imgData!: string;
  
  constructor(private formBuilder: FormBuilder, private router: Router ,private helperService: HelperService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  helperDomain: String[] = [];

  addDomain(domain: String, event: any) {
    if(event.target.checked){
      this.helperDomain.push(domain);
    }
    else {
      const index = this.helperDomain.indexOf(domain);
      this.helperDomain.splice(index, 1);
    }
    
  }

  @ViewChildren("checkboxes") checkboxes!: QueryList<ElementRef>;
  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

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

  onSubmit(addForm: any) {
    addForm.value.domains = this.helperDomain;
    addForm.value.imgData = this.imgData;
    addForm.value.offeringClients = [];
    console.log(addForm.value);
    this.helperService.addHelper(addForm.value).subscribe(
      (response: Helper) => {
        // console.log(response); 
        this.dataService.setLoggedHelper(response);
        window.alert("You are registered successfully"); 
        this.router.navigateByUrl("/helpingHands").then(() => {
          window.location.reload();
        });
        addForm.reset();
        this.uncheckAll();
      },
      (error: HttpErrorResponse) => {alert(error.message);}
    )
    
  }

  makeSubmenu(value: string) {
    new makeSubmenu(value);
  }

  // citiesByState = {
  //   Odisha: ["Bhubaneswar","Puri","Cuttack"],
  //   Maharashtra: ["Mumbai","Pune","Nagpur"],
  //   Kerala: ["kochi","Kanpur"]
  // }
  
  
    // function displaySelected() { var country = document.getElementById("grid-state").value;
    // var city = document.getElementById("grid-city").value;
    // alert(country+"\n"+city);
    // }
    // function resetSelection() {
    // document.getElementById("grid-state").selectedIndex = 0;
    // document.getElementById("grid-city").selectedIndex = 0;
    // }

}
