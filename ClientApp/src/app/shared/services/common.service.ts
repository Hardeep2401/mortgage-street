import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  layoutNav: boolean = false;
  offcanvasContent: any;
  constructor() {}
}
