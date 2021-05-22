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

    <hr />
    <button kendoButton [primary]="true">primary button</button>
    <button kendoButton [togglable]="true">togglable button</button>
    <button kendoButton icon="calendar">icon button</button>

    <hr />
    <br />
    <h5>button group</h5>
    <kendo-buttongroup>
      <button kendoButton [primary]="true">primary button</button>
      <button kendoButton [togglable]="true">togglable button</button>
      <button kendoButton icon="calendar">icon button</button>
      <kendo-buttongroup> </kendo-buttongroup
    ></kendo-buttongroup>

    <hr />
    <br />
    <h5>button group look=outline for all</h5>
    <kendo-buttongroup look="outline">
      <button kendoButton [primary]="true">primary button</button>
      <button kendoButton [togglable]="true">togglable button</button>
      <button kendoButton icon="calendar">icon button</button>
      <kendo-buttongroup> </kendo-buttongroup
    ></kendo-buttongroup>

    <hr />
    <br />
    <h5>button group width</h5>
    <kendo-buttongroup width="100">
      <button kendoButton [primary]="true">primary button</button>
      <button kendoButton [togglable]="true">togglable button</button>
      <button kendoButton icon="calendar">icon button</button>
      <kendo-buttongroup> </kendo-buttongroup
    ></kendo-buttongroup>
  `
})
export class AppComponent {
  public onButtonClick(): void {
    console.log('click');
  }
}
