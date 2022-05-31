import { Component } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { taskModel } from './taskModel';
import { MatDialog } from '@angular/material/dialog';
import { AddtaskComponent } from './addtask/addtask.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: taskModel[] = [];
  constructor(private taskDataService: TaskDataService, public dialog: MatDialog){
    this.getTasks();
  }
  addTask(){
    const dialogRef = this.dialog.open(AddtaskComponent);
  }

  getTasks(){
    this.taskDataService.getTasks().subscribe(response => this.tasks = response);
  }

  deleteTask(id:string){
    this.taskDataService.removeTask(id).subscribe(res => this.getTasks());
  }
}
