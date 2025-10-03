import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent {
  http = inject(HttpClient);
  @Input() orderForm!: any;

  isError(fieldName: string) {
    const control = this.orderForm.get(fieldName);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }

  sendOrder() {
    if (this.orderForm.valid) {
      this.http
        .post('https://testologia.ru/cars-order', this.orderForm.value)
        .subscribe({
          next: ({ message }: any) => {
            alert(message);
            this.orderForm.reset();
          },
          error: ({ error }: any) => {
            alert(error.message);
          },
        });
    }
  }
}
