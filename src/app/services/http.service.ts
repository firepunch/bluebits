
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Package } from '../models/Package';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // httpClient = inject(HttpClient);
  constructor() { }

  getPackage(id: number) {
    return of(TEST_DATA as Package)
  }
}

const TEST_DATA = {
  "package_id": 487303,
  "package_status": "pending",
  "delivery_details": {
    "delivery_id": 707,
    "delivery_location": "Bluebits Office Metrotown",
    "delivery_address": "4289 Kingsway, Burnaby, BC, Canada, V6B 0C8",
    "delivered_at": "2023-10-17T17:05:54Z",
    "shipper": {
      "shipper_id": 808,
      "shipper_name": "Fedex",
      "shipper_image": "https://placehold.co/400"
    },
    "compartment": {
      "compartment_id": 909,
      "compartment_number": 104,
      "pickup_code": 288234123,
      "is_open": false
    }
  }
}