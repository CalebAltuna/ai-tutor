import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');

  protected selectSpaghetti(): void {
    console.log('Loading Spaghetti Carbonara');
  }

  protected selectSalad(): void {
    console.log('Loading Caprese Salad');
  }
}
