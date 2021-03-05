import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
private api="https://formspree.io/f/xpzoggov"
  constructor(private http:HttpClient) { }
  
  PostMessage(input: any){
    return this.http.post(this.api,input,{responseType:'text'});
    
  }
}
