import { Component, OnInit, inject } from '@angular/core';
import { Package } from '../../models/Package';
import { HttpService } from '../../services/http.service';
import { Delivery } from '../../models/Delivery';
import { format } from 'date-fns';
import { addIcons } from 'ionicons';
import { chevronBack } from 'ionicons/icons';
import {
  IonButton, IonContent, IonBadge, IonIcon, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'package-view',
  templateUrl: './package-view.component.html',
  styleUrl: './package-view.component.scss',
  standalone: true,
  imports: [IonButton, IonContent, IonBadge, IonIcon, IonGrid, IonRow, IonCol]
})
export class PackageViewComponent implements OnInit {
  package?: Package = undefined;
  delivery?: Delivery = undefined;
  httpService = inject(HttpService)
  constructor() {
    addIcons({ chevronBack })
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
