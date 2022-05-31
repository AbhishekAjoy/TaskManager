import { Component } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { taskModel } from './taskModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskapp';
  tasks: taskModel[] = [];
  
  constructor(private taskDataService: TaskDataService){
    this.getTasks();
  }
  addTask(){
   console.log('Enter new task');
  }

  getTasks(){
    this.taskDataService.getTasks().subscribe(response => this.tasks = response);
  }

  deleteTask(id:string){
    this.taskDataService.removeTask(id).subscribe(res => this.getTasks());
  }
}
