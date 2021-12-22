import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pdf } from '../models/pdf';

@Injectable({
  providedIn: 'root'
})
export class PdfserviceService {

  constructor(private httpClient: HttpClient) { }

  getPdfs(): Observable<Array<Pdf>>{
    return this.httpClient.get<Array<Pdf>>("http://localhost:3000/pdfs");
  }
}
