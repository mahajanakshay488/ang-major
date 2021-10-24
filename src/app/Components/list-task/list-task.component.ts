import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { EmployerService } from 'src/app/services';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  added:Array<object>;
  todo: Array<object>;
  Employer: object;

  constructor(
    private employerService: EmployerService
  ) { }

  ngOnInit(): void {
    this.employerService.employer$.subscribe(employer => {
      this.added = employer.addedTasks;
      this.todo = employer.todoTasks;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
          if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        //console.log(event.container.data, event.previousIndex, event.currentIndex);
        this.employerService.employer$.subscribe(employer => {
          employer.addedTasks = this.added;
          employer.todoTasks = this.todo;
          this.employerService.UpdateEmployer(employer);
        });
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
                          //console.log(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                          
                          this.employerService.employer$.subscribe(employer => {
                            employer.addedTasks = this.added;
                            employer.todoTasks = this.todo;
                            this.employerService.UpdateEmployer(employer);
                          });
      }
    }
}
