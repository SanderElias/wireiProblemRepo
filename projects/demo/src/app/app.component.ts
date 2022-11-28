import { Component, inject } from '@angular/core';
import { LibBService } from 'libB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = inject(LibBService).data;

}
