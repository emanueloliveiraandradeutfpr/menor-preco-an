import { NgOptimizedImage } from '@angular/common';
import { Component, Output } from '@angular/core';
import { ScannerComponent } from '../scanner/scanner.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, ScannerComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  useForm: FormGroup;

  @Output() searchTerm: String = '';

  constructor(private router: Router = new Router()) {
    this.useForm = new FormGroup({
      searchTerm: new FormControl('', [
        Validators.minLength(2),
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    this.searchTerm = this.useForm.value.searchTerm;
    console.log(this.searchTerm);
    this.useForm.reset();
    this.router.navigate([`/result/${this.searchTerm}`]);
  }
}
