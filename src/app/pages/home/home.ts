import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { Products } from '../../shared/components/products/products';
import { AboutSection } from '../../shared/components/about-section/about-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Products, AboutSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
