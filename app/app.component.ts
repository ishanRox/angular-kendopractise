import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="k-block">
      <button kendoButton look="default">Default button</button>
      <button kendoButton look="outline">outline button</button>
      <button kendoButton look="bare">bare button</button>
      <button kendoButton >another default button</button>
    </div>
  `
})
export class AppComponent {
  public onButtonClick(): void {
    console.log('click');
  }
}
