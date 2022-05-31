import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { taskModel } from '../taskModel';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  //To be changed to api
  @Input() id: string = '';
  @Input() dueDate: Date = new Date();
  @Input() taskName: string = '';
  @Output() onRemoveTask = new EventEmitter<string>();
  constructor(private taskService: TaskDataService) { }

  ngOnInit(): void {
  }

  removeTask(taskId: string){
    this.onRemoveTask.emit(taskId);
  }

  
}
