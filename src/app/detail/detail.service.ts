import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailService {
  constructor(private http: HttpClient) { }

  getHeroeByid(id){
    const body = {
      "id": id
    }
    const headers = {
      headers: {
        "apikey" : "1772667852942177",
        'Access-Control-Allow-Origin': '*'
      }
    }
    
    return this.http.post('http://localhost:3000/heroesById', body, headers);
  }
}
