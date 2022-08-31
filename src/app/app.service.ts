import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class AppService {
  getCustomers() {
    return this.httpClient.get('/api/customers');
  }

  constructor(private httpClient: HttpClient) {
  }
}
