import { Component, computed, signal } from '@angular/core';
import { JsonPipe } from '@angular/common'; // Asegúrate de que esta línea esté
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';
import { signalUpdateFn } from '@angular/core/primitives/signals';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe], // Y asegúrate de que JsonPipe esté aquí
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal(MOCK_RECIPES[0]);
  protected readonly servings = signal(2);
//COMPUTED VARIABLE
  protected readonly adjustedIngredients = computed(() => {
    const recipe = this.recipe();
    const currentServings = this.servings();
    const baselineServings = 2;

    if (!recipe) return [];

    return recipe.ingredients.map(ingredient => {
      const newQuantity = (ingredient.quantity / baselineServings) * currentServings;
      return {
        ...ingredient,
        quantity: Math.round(newQuantity * 100) / 100
      };
    });
  });

  protected selectSpaghetti(): void {
    console.log('Loading Spaghetti Carbonara');
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected selectSalad(): void {
    console.log('Loading Caprese Salad');
    this.recipe.set(MOCK_RECIPES[1]);
  }

protected increase(): void {
  this.servings.update(currentValue => currentValue + 1);
}
protected decrease(): void {
  this.servings.update(currentValue => currentValue - 1);
}

}
