import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { RequestService } from './request.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private reqService: RequestService, private dialogRef: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  close(option: string) {
    this.send(option);
  }

  send(str: string) {
    /**
     * Subscribe begins execution of the observable. the getData method returns an observable.
     */
    const url = str === 'success' ? 'https://jsonplaceholder.typicode.com/todos/1' : 'https://jsonplaceholder.typicode.com/todo';
    this.reqService.getData(url).subscribe((res) => {
      this.dialogRef.close(res);
    }, err => {
      // error callback
      this.dialogRef.close(err);
    });
  }
}
