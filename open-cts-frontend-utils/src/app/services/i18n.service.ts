import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor(private http: HttpClient) { }

  _translate(lang: string, field: string) {
    return new Observable<any> (obs => {
      this.http.get(`../../assets/i18n/${lang}.json`).subscribe(data => {
        obs.next(data[field]);
      });
    });
  }
}
