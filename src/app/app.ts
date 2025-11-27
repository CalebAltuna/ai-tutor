/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');

  //butons
  protected counter= 0;
  protected increment(): void {
    this.counter++;
  }
  protected decrement(): void {
    this.counter--;
  }
  protected selectSpaghetti(): void{
    this.title.set('Spaghetti');
    console.log('Loading spaghettis');
  }
  protected selectSalad(): void{
    this.title.set('Salad');
    console.log('Loading salads')
  }
}
