import { AppComponent } from './../app.component';
import { Helper } from './../helper';
import { HttpErrorResponse } from '@angular/common/http';
import { domains } from './../constLists';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HelperService } from '../helper.service';
import { states } from '../constLists';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

declare var makeSubmenu: any;

@Component({
  selector: 'app-find-helper',
  templateUrl: './find-helper.component.html',
  styleUrls: ['./find-helper.component.css']
})
export class FindHelperComponent implements OnInit {

  states = states;
  domains = domains;
  helpers: Helper[] = [];
  public helperByLocation: Helper[] = [];
  search: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router , private appComponent: AppComponent , private helperService: HelperService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getHelpers();
  }

  public getHelpers(): void {
    this.helperService.getHelper().subscribe(
      (response: Helper[]) => { this.helpers = response; console.log(response) },
      (error: HttpErrorResponse) => { alert(error.message); }
    )
  }

  public helperFilter(detailForm: any) {
    this.getHelpers();
    this.helperByLocation = [];
    console.log(detailForm);
    // console.log(detailForm.location.state);
    // console.log(detailForm.location.city);
    for (const helper of this.helpers){
      if(helper.domains.indexOf(detailForm.domain) != -1 
      && helper.location.state === detailForm.state
      && helper.location.city === detailForm.city
      ) {
        this.helperByLocation.push(helper);
      }
    }
    this.search = true;
    document.getElementById('list')?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  public resetHelperByLocation(): void {
    this.helperByLocation = [];
    this.search = false;
  }

  // public isEmpty(): boolean{
  //   if(this.helperByLocation.length > 0) {
  //     return true;
  //   }
  //   else { 
  //     return false;
  //   }
  // }

  makeSubmenu(value: string) {
    new makeSubmenu(value);
  }

  hire(helper: Helper): void {
    this.helperService.addOfferingClient(helper, this.dataService.getLoggedClient()).subscribe(
      (helper: Helper) => {alert("" + helper.name + " is requested to be hired by you." );},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
    
  }

  viewHelperProfile(helper: Helper) {
    this.dataService.setSelectedHelper(helper);
    this.router.navigateByUrl('/helperprofile');
  }

  scroll($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
