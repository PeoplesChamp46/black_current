import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  /*  private REST_API_SERVER = "http://localhost:3000"; */

  constructor(private httpCLient: HttpClient) {}

  search_term = 'london';

  apiCall() {
    let key = 'po72dD4V0XgAesYOTDP0AFRl1WJdmUZ57nZ_61TYUhE';
    console.log('called');
    return this.httpCLient.get(
      'https://api.unsplash.com/search/photos/?query=' +
        this.search_term +
        '&per_page=9&client_id=po72dD4V0XgAesYOTDP0AFRl1WJdmUZ57nZ_61TYUhE'
    );
  }

  key_api = 'LVjrTbCI0RDP0XA54ykfZyIvVr75or4O';

  private colorCodeSource = new Subject<any>();
  colorCode$ = this.colorCodeSource.asObservable();

  sendTerm(s_term: any) {
    this.search_term = s_term;
  }

  board_create() {
    console.log('called');
    return this.httpCLient.get(
      ' https://api.gettyimages.com/v3/boards?client_id=LVjrTbCI0RDP0XA54ykfZyIvVr75or4O'
    );
  }
}
