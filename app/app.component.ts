import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="k-block">
      <button kendoButton look="default">Default button</button>
      <button kendoButton look="outline">outline button</button>
      <button kendoButton look="bare">bare button</button>
      <button kendoButton>another default button</button>
      <button kendoButton [disabled]="true">another default button</button>
    </div>

    <button kendoButton [primary]="true">primary button</button>
    <button kendoButton [togglable]="true">togglable button</button>
  `
})
export class AppComponent {
  public onButtonClick(): void {
    console.log('click');
  }
}
