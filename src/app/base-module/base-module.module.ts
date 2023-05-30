import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ParentComponent, ChildComponent, ButtonModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BaseModule {}