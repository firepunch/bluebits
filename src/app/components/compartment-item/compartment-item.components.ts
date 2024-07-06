import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CompartmentContent } from '../../models/Component';

@Component({
  selector: 'compartment-item',
  templateUrl: './compartment-item.component.html',
  styleUrl: './compartment-item.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class CompartmentItem implements OnInit {
  @Input({ required: true }) title?: string;
  @Input() type?: string;
  ngOnInit(): void {
  }
}
