import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { format } from 'date-fns';
import { addIcons } from 'ionicons';
import { chevronBack, homeOutline, mailOutline } from 'ionicons/icons';
import { BannerButton } from '../../components/banner-button/banner-button.components';
import { CompartmentItem } from '../../components/compartment-item/compartment-item.components';
import { Delivery } from '../../models/Delivery';
import { Package } from '../../models/Package';
import { HttpService } from '../../services/http.service';
import {
  IonBadge,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow
} from '@ionic/angular/standalone';

@Component({
  selector: 'package-view',
  templateUrl: './package-view.page.html',
  styleUrl: './package-view.page.scss',
  standalone: true,
  imports: [CommonModule, IonButton, IonContent, IonBadge, IonIcon, IonGrid, IonRow, IonCol, CompartmentItem, BannerButton]
})
export class PackageViewPage implements OnInit {
  package?: Package;
  delivery?: Delivery;
  httpService = inject(HttpService)
  constructor() {
    addIcons({ chevronBack, homeOutline, mailOutline })
  }
  ngOnInit(): void {
    const TEST_PACKAGE_ID = 487303
    this.getPackage(TEST_PACKAGE_ID)
  }
  getPackage(id:number) {
    this.httpService.getPackage(id).subscribe((result: Package) => {
      this.package = result;
      this.delivery = result.delivery_details;
      this.delivery.delivered_at = format(result.delivery_details.delivered_at, 'yyyy-MM-dd hh:mm')
    });
  }
}
