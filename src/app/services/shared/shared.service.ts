import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectMapItemFlag: any = new BehaviorSubject(false);

  constructor() { }

  setMapItemFlag(flag: boolean) {
    this.selectMapItemFlag.next(flag);
  }
}
