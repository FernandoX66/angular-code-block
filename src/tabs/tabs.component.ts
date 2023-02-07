import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgFor, NgClass],
  template: `
    <button [ngClass]="{ active: selectedTab === tab.index }" *ngFor="let tab of tabs" (click)="selectTab(tab.index)">
      {{ tab.name }}
    </button>
  `,
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  tabs = [
    {
      index: 0,
      name: 'HTML',
    },
    {
      index: 1,
      name: 'CSS',
    },
    {
      index: 2,
      name: 'TS',
    },
  ];
  selectedTab = 0;
  @Output()
  tabSelected = new EventEmitter<number>();

  selectTab(index: number): void {
    this.selectedTab = index;
    this.tabSelected.emit(this.selectedTab);
  }
}
