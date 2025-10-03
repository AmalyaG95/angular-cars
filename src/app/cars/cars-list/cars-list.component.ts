import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { TCar, TCarsFilterItem, BASE_CARS, CARS_FILTER } from './constants';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [],
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent {
  http = inject(HttpClient);
  cars: TCar[] = [];
  carsFilter: TCarsFilterItem[] = CARS_FILTER;

  @Input() orderForm!: any;

  ngOnInit() {
    this.getCars('');
  }

  getCars(filter: string) {
    this.http
      .get('https://testologia.ru/cars-data', { params: { filter } })
      .subscribe((data: any) => (this.cars = data));
  }

  changeFilter(filter: TCarsFilterItem, carsContent: HTMLElement) {
    this.carsFilter.forEach((el) => (el.active = false));
    filter.active = true;
    this.getCars(filter.name);
    carsContent.scrollIntoView({ behavior: 'instant' });
  }
}
