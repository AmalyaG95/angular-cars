import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { FooterComponent } from '../footer/footer.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { OrderFormComponent } from './order-form/order-form.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    MainBannerComponent,
    CarsListComponent,
    OrderFormComponent,
    FooterComponent,
  ],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  orderForm = new FormGroup({
    car: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl('', [Validators.pattern(/^\+?[0-9]+$/)]),
  });
}
