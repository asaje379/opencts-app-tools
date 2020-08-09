import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  lang_features: any = null;
  lang = 'fr';

  constructor(private langService: I18nService) { }

  ngOnInit(): void {
    this.langService._translate(this.lang, 'register').subscribe(data => {
      this.lang_features = data;
      console.log(this.lang_features);
    });    
  }


  translate(lang) {
    this.lang = lang;
    
  }
}
