import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { environment } from './../environments/environment.prod';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getClient(email: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiServerUrl}/client/find?email=${email}`);
  }

  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiServerUrl}/client/add/`, client);
  } 
}
