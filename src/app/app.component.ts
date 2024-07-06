import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonBackButton, IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, IonHeader, IonToolbar, IonBackButton, IonContent]
})
export class AppComponent {
  title = 'bluebits';
}
