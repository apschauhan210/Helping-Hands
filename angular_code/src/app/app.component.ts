import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { Helper } from './helper';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // public slectedHelper!: Helper;

  // public selectedClient!: Client;

  public loggedHelper: Helper =  this.dataService.getLoggedHelper();

  public loggedClient: Client = this.dataService.getLoggedClient();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSelectingHelper(selectedHelper: Helper): void {
    // this.slectedHelper = selectedHelper;
    this.dataService.setSelectedHelper(selectedHelper);
  }

  onSelectingClient(selectedClient: Client): void {
    // this.selectedClient = selectedClient;
    this.dataService.setSelectedClient(selectedClient);
  }

  // goToHelperProfile(): void {
  //   this.router.navigate(['helperprofile', {helper: this.slectedHelper}]);
  // }

  isClientUndefined(): boolean {
    if(this.loggedClient == undefined){
      return true;
    }
    else{
      return false;
    }
  }

  isHelperUndefined(): boolean {
    if(this.loggedHelper == undefined){
      return true;
    }
    else{
      return false;
    }
  }

  toggleDropdown(): void {
   const dropdown =  document.getElementById('dropdown')
   if(dropdown?.style.getPropertyValue('display') === 'none') {
     dropdown.style.setProperty('display', 'block');
   }
   else{
    dropdown?.style.setProperty('display', 'none');
   }
  }

  logOut(): void {
    this.dataService.logOut();
    this.router.navigateByUrl("/helpingHands").then(() => {
      window.location.reload();
    });
  }


}

