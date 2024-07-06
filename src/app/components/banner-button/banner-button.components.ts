import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonCol,
  IonGrid,
  IonIcon,
  IonRow
} from '@ionic/angular/standalone';

@Component({
  selector: 'banner-button',
  templateUrl: './banner-button.component.html',
  styleUrl: './banner-button.component.scss',
  standalone: true,
  imports: [CommonModule, IonGrid, IonRow, IonCol, IonIcon]
})
export class BannerButton implements OnInit {
  @Input({ required: true }) iconName?: string;
  @Input({ required: true }) title?: string;
  @Input({ required: true }) desc?: string;
  ngOnInit(): void {
  }
}
