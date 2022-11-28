import { inject, Injectable } from '@angular/core';
import { LibAService } from 'libA';

@Injectable({
  providedIn: 'root'
})
export class LibBService {
  data = inject(LibAService).data;

}
