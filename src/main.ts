import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CodeBlockComponent } from './code-block/code-block.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  template: `
    <h1>Code Block Component</h1>
    <app-code-block>
    <pre>
<span class="tag"><<span class="tag-name">clapp-card</span>></span>
  <span class="tag"><<span class="tag-name">clapp-card-header</span> header-large [title]=<span class="tag-string">"cardTitle"</span> icon=<span class="tag-string">"li-close-icon"</span>></span>
    Some content here
  <span class="tag">&#60;/<span class="tag-name">clapp-card-header</span>></span>
<span class="tag">&#60;/<span class="tag-name">clapp-card</span>></span>
</pre>
    </app-code-block>
  `,
})
export class App {}

bootstrapApplication(App);
