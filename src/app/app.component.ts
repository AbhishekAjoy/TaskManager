import { Component } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { taskModel } from './taskModel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddtaskComponent } from './addtask/addtask.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: taskModel[] = [];
  newTask: taskModel = { id: '', name: '', dueDate: new Date(), details: '' };
  constructor(
    private taskDataService: TaskDataService,
    public dialog: MatDialog
  ) {
    this.getTasks();
  }
  addTask() {
    const dialogRef = this.dialog.open(AddtaskComponent, {
      data: { newTask: this.newTask },
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.newTask = result.data;
      if (this.newTask) {
        this.taskDataService.addTask(this.newTask).subscribe((res) => {
        });
        this.tasks.push(this.newTask);
      }
    });
  }

  getTasks() {
    this.taskDataService
      .getTasks()
      .subscribe((response) => (this.tasks = response));
  }

  deleteTask(id: string) {
    this.taskDataService.removeTask(id).subscribe((res) => this.getTasks());
  }
}
