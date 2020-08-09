import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { flash } from '../../functions';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {

  @Input() label: string = '';
  @Input() name: string = '';
  @Input() type: string = 'image' || 'pdf';

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  pick(file: File) {
    // Handle errors of bad file type
    if (file.type.indexOf(this.type) === -1) {
      flash('error', 'Le format du fichier est incorrect', 3);
    } else {
      let fd = new FormData;
      fd.append('file', file);
      console.log({ ...fd }, file)
      this.auth.upload(fd).subscribe(res => console.log(res));
    }
  }

}
