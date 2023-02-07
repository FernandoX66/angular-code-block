import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CodeDirective } from './directives/code.directive';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [ClipboardModule, NgIf, NgTemplateOutlet],
  template: `
    <div class="code-container">
      <button [cdkCopyToClipboard]="codeBlockText" *ngIf="codeBlockText">Copy</button>
      <div #codeContent>
        <ng-template [ngTemplateOutlet]="templateToShow"></ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent
  implements AfterContentInit, OnChanges, AfterViewInit
{
  @ContentChildren(CodeDirective)
  codeBlockElements: QueryList<CodeDirective>;
  @ViewChild('codeContent')
  codeContent: ElementRef;
  templateToShow: TemplateRef<any>;
  codeBlockText: string;
  @Input()
  currentTab = 0;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentTab'] && this.codeBlockElements) {
      this.updateTemplate();
      this.cdr.detectChanges();
      this.updateTextToCopy();
    }
  }

  ngAfterContentInit(): void {
    this.updateTemplate();
  }

  ngAfterViewInit(): void {
    this.updateTextToCopy();
    this.cdr.detectChanges();
  }

  updateTemplate(): void {
    this.templateToShow = this.codeBlockElements.find(
      (codeblockElement: CodeDirective) => {
        return codeblockElement.tabIndex === this.currentTab;
      }
    ).template;
  }

  updateTextToCopy(): void {
    this.codeBlockText =
      this.codeContent.nativeElement.firstElementChild.innerText;
  }
}
