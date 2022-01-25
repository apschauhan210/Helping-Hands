import { Helper } from './helper';
import { Injectable } from '@angular/core';
// import { environment } from './../environments/environment';
import { environment } from './../environments/environment.prod'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getHelper(): Observable<Helper[]> {
    return this.http.get<Helper[]>(`${this.apiServerUrl}/helper/`);
  }

  public getHelperByEmail(email: string): Observable<Helper> {
    return this.http.get<Helper>(`${this.apiServerUrl}/helper/find?email=${email}`);
  }

  public addHelper(helper: Helper): Observable<Helper> {
    return this.http.post<Helper>(`${this.apiServerUrl}/helper/add/`, helper);
  }

  public addOfferingClient(helper: Helper, client: Client): Observable<Helper> {
    return this.http.put<Helper>(`${this.apiServerUrl}/helper/addofferingclient/${helper.email}`, client);
  }
}
