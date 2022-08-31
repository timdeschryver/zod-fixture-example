import {AppComponent} from "./app.component";
import {render, screen} from "@testing-library/angular";
import {AppService} from "./app.service";
import {createFixture} from "zod-fixture";
import {z} from "zod";
import {CustomerSchema} from "../models/customer";
import {of} from "rxjs";

describe(AppComponent.name, () => {
  it('renders a collection of customers', async () => {
    const customers = createFixture(z.array(CustomerSchema));
    await render(AppComponent, {
      providers: [
        {
          provide: AppService,
          useValue: {
            getCustomers: () => of(customers)
          }
        }
      ]
    });

    expect(await screen.findByText(customers[0].name, {exact: false})).toBeTruthy()
  })
})
