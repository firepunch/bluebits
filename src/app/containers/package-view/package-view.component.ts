import { Component, OnInit, inject } from '@angular/core';
import { Package } from '../../models/Package';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'package-view',
  templateUrl: './package-view.component.html',
  styles: []
})
export class PackageViewComponent implements OnInit {
  package?: Package = undefined;
  httpService = inject(HttpService)
  ngOnInit(): void {
    const TEST_PACKAGE_ID = 487303
    this.getPackage(TEST_PACKAGE_ID)
  }
  getPackage(id:number) {
    this.httpService.getPackage(id).subscribe((result: Package) => {
      this.package = result;
    });
  }
}
