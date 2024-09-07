import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ScannerComponent } from '../scanner/scanner.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, ScannerComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  useForm: FormGroup;

  constructor() {
    this.useForm = new FormGroup({
      searchTerm: new FormControl('', [
        Validators.minLength(2),
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    console.log(this.useForm.value);
    this.useForm.reset();
  }
}
