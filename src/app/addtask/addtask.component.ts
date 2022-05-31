import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { taskModel } from '../taskModel';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  newTask: taskModel = {id:'',name:'',dueDate: new Date(), details:''} ;

  constructor() { }

  ngOnInit(): void {
  }

  taskForm = new FormGroup({
    taskName : new FormControl(''),
    taskDate : new FormControl(''),
    taskDetails : new FormControl('')
  });

  onSubmit(){
    this.newTask.name = this.taskForm.value.taskName;
    this.newTask.details = this.taskForm.value.taskDetails;
    console.log(this.newTask);
  }

}
