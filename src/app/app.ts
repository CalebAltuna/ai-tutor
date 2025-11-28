import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal(MOCK_RECIPES[0]);

  protected selectSpaghetti(): void {
    console.log('Loading Spaghetti Carbonara');
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected selectSalad(): void {
    console.log('Loading Caprese Salad');
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected readonly count = signal(0);

  protected increase(): void{
    this.count.update(currentValue => currentValue + 1);
  }

  protected decrease(): void{
    this.count.update(currentValue => currentValue - 1);
  }

}
