import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  @Input() searchTerm?: String;

  constructor(private route: ActivatedRoute, private location: Location) {
    this.searchTerm = String(this.route.snapshot.paramMap?.get('searchTerm'));
  }

  goBack(): void {
    this.location.back();
  }
}
