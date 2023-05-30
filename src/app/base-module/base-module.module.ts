import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RequestService } from './child/request.service';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, ButtonModule, MessagesModule, DropdownModule],
  exports: [ParentComponent, ChildComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DialogService, DynamicDialogRef, RequestService]
})
export class BaseModule {}