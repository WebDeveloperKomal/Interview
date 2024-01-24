import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataviewServiceService {
  url="https://fakestoreapi.com"
  constructor(private http:HttpClient) {

   }

   fetchProducts(){
    return this.http.get(`${this.url}/products`);
   }
}
