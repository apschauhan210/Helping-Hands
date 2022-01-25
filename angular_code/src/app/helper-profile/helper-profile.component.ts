import { HttpErrorResponse } from '@angular/common/http';
import { ClientService } from './../client.service';
import { Helper } from './../helper';
import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';

declare var openDropdown: any;

@Component({
  selector: 'app-helper-profile',
  templateUrl: './helper-profile.component.html',
  styleUrls: ['./helper-profile.component.css']
})
export class HelperProfileComponent implements OnInit {

  // @Input() helper!: Helper;

  clients: Client[] = [];

  constructor(private router: Router, private helperService: HelperService ,private dataService: DataService, private appComponent: AppComponent, private clientService: ClientService) { }

  selectedHelper: Helper = this.dataService.getSelectedHelper();
  loggedHelper: Helper = this.dataService.getLoggedHelper();
  client: Client = this.dataService.getLoggedClient();

  addClientFromEmails(): void {
    for(const clientEmail of this.loggedHelper.offeringClients) {
      this.clientService.getClient(clientEmail).subscribe(
        (response: Client) => { this.clients.push(response); },
        (error: HttpErrorResponse) => {alert(error.message);}
      )
    }
  }

  ngOnInit(): void {
    if(this.loggedHelper != undefined) {
      this.addClientFromEmails();
    }
  }

  onClickingNotification(client: Client): void{
    this.dataService.setSelectedClient(client);
    this.router.navigateByUrl('/clientprofile');
  }

  hire(helper: Helper): void {
    this.helperService.addOfferingClient(helper, this.dataService.getLoggedClient()).subscribe(
      (helper: Helper) => {alert("" + helper.name + " is requested to be hired by you." );},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
    
  }

}
