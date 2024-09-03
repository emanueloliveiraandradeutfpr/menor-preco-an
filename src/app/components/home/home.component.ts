import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ScannerComponent } from '../scanner/scanner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, ScannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
