import { Router } from '@angular/router';
import { domains , domains2} from './../constLists';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Helper } from '../helper';
import { Client } from '../client';
import { DataService } from '../data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  domains = domains2;

  constructor(private appComponent: AppComponent, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  helper: Helper = this.dataService.getLoggedHelper();
  client: Client = this.dataService.getLoggedClient();

  helperAccSigned(): void {
    alert("You need to sign with a User account in order to avail this service");
  }

  redirect() {
    if(this.client == undefined && this.helper == undefined){
      this.router.navigateByUrl('/clientlogin');
    }
    else if(this.helper != undefined){
      this.helperAccSigned();
    }
    else if(this.helper == undefined && this.client != undefined){
      this.router.navigateByUrl('/findhelper');
    }
  }
}
