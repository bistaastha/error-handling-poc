import { Component, OnInit } from '@angular/core';
import { DialogService,DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  
  hasActionSucceeded = false;
  hasActionFailed = false;
  result: any;
  constructor(public dialogService: DialogService, private ref: DynamicDialogRef) {
    this.result = null;
  }
  ngOnInit(): void {
    /**
     * What I need to do?
     * - demo normal events
     * - any interesting event cases
     * - put notes in the code
     * - For error handling, see both validation and event emitter
     */

  }
  show() {
    this.ref = this.dialogService.open(ChildComponent,{
      header: 'Demo dialog',
    });

    this.ref.onClose.subscribe((res) => {
      console.log('res', res);
    });

  }


}
