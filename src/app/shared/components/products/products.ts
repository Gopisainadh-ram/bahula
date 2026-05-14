import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products = [
    {
      name: 'Cow Milk',
      image: 'assets/images/cow-milk.png',
    },
    {
      name: 'Buffalo Milk',
      image: 'assets/images/buffalo-milk.png',
    },
    {
      name: 'Tea',
      image: 'assets/images/tea.png',
    },
    {
      name: 'Coffee',
      image: 'assets/images/coffee.png',
    },
    {
      name: 'Milk Shake',
      image: 'assets/images/milkshake.png',
    },
    {
      name: 'Badam Milk',
      image: 'assets/images/badam-milk.png',
    },
    {
      name: 'Lassi',
      image: 'assets/images/lassi.png',
    },
    {
      name: 'Tea Podi',
      image: 'assets/images/tea-podi.png',
    },
  ];
}
