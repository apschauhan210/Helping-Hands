import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Client } from '../client';
import { DataService } from '../data.service';
import { Helper } from '../helper';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  // @Input() client!: Client;

  constructor(private dataService: DataService, private appComponenet: AppComponent) { }
  
  client: Client = this.dataService.getSelectedClient();

  helper: Helper = this.dataService.getLoggedHelper();

  ngOnInit(): void {
  }

}
