import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { taskModel } from '../taskModel';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as uuid from 'uuid';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  minDate: Date = new Date();
  newTask: taskModel = {id:'l',name:'l',dueDate:new Date(), details:'l'};
  constructor(public dialogRef: MatDialogRef<AddtaskComponent>, @Inject(MAT_DIALOG_DATA) public data: taskModel) { 

  }

  ngOnInit(): void {
  }


  taskForm = new FormGroup({
    taskName : new FormControl(''),
    taskDate : new FormControl(''),
    taskDetails : new FormControl('')
  });

  onSubmit(){
    this.newTask.id = uuid.v4();
    this.newTask.name = this.taskForm.value.taskName;
    this.newTask.details = this.taskForm.value.taskDetails;
    this.newTask.dueDate = this.taskForm.value.taskDate;

    this.dialogRef.close({data: this.newTask});
  }

  cancel(){
    this.dialogRef.close({data: null});
  }

}
