import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCode]',
  standalone: true,
})
export class CodeDirective {
  @Input('appCode')
  tabIndex: number;

  constructor(public readonly template: TemplateRef<any>) {}
}
