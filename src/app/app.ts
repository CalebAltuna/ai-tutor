import { Component, computed, signal } from '@angular/core';
import { JsonPipe } from '@angular/common'; // Asegúrate de que esta línea esté
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe], // Y asegúrate de que JsonPipe esté aquí
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal(MOCK_RECIPES[0]);

  protected readonly adjustedIngredients = computed(() =>{
    this.count;
    this.recipe;
    return this.recipe().ingredients;
  });

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
