import { Component } from '@angular/core';

@Component({
  selector: 'app-code-block',
  standalone: true,
  template: `
    <div class="code-container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent {}
