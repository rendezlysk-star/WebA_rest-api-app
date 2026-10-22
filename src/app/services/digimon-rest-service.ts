import { Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DigimonRestService {
  pageNumber = signal<number>(1);

  dataList = httpResource(() => `https://digi-api.com/api/v1/digimon?page=${this.pageNumber()}`);
}
