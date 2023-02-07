import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CodeBlockComponent } from './code-block/code-block.component';
import { CodeDirective } from './code-block/directives/code.directive';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent, CodeDirective, TabsComponent],
  templateUrl: './app.component.html',
})
export class App {
  tabIndex = 0;

  onTabSelected(index: number): void {
    this.tabIndex = index;
  }
}

bootstrapApplication(App);
