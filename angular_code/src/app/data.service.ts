import { Injectable } from '@angular/core';
import { Client } from './client';
import { Helper } from './helper';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public setSelectedHelper(helper: Helper) {
    sessionStorage.setItem('selectedHelper', JSON.stringify(helper));
  }

  public getSelectedHelper() {
    const helper = sessionStorage.getItem('selectedHelper');
    if( helper != null) {
      return JSON.parse(helper);
    }    
  }

  public setSelectedClient(client: Client) {
    sessionStorage.setItem('selectedClient', JSON.stringify(client));
  }

  public getSelectedClient() {
    const client = sessionStorage.getItem('selectedClient');
    if( client != null) {
      return JSON.parse(client);
    }
  }

  public setLoggedHelper(helper: Helper) {
    localStorage.setItem('loggedHelper', JSON.stringify(helper));
  }

  public getLoggedHelper() {
    const helper = localStorage.getItem('loggedHelper');
    if( helper != null) {
      return JSON.parse(helper);
    }
  }

  public setLoggedClient(client: Client) {
    localStorage.setItem('loggedClient', JSON.stringify(client));
  }

  public getLoggedClient() {
    const client = localStorage.getItem('loggedClient');
    if( client != null) {
      return JSON.parse(client);
    }
  }

  public logOut() {
    localStorage.clear();
  }
}
