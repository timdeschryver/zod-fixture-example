import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from "@angular/common";
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <pre>{{ customers$ | async | json}}</pre>
  `
})
export class AppComponent {
  customers$ = this.appService.getCustomers()

  constructor(private readonly appService: AppService) {
  }
}
