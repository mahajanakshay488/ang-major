import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  show: boolean ;
  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.show = this.taskService.showAddTask;
  }

  showForm(){
    this.show = !this.show;
  }

}
