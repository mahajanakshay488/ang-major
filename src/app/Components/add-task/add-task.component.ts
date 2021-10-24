import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployerService, TaskService } from 'src/app/services';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@ViewChild('form') form: NgForm;
subs:Subscription;
  constructor(
    private employerService: EmployerService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  addTask(){
    this.subs = this.employerService.employer$.subscribe(employer => {
      const task = this.form.form.value;

      const { title, desc, endDate } = task;

      var date = new Date();
      task.date = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`;

      const employerTask = { title, desc, endDate };

      employer.addedTasks.push(employerTask);
      
      console.log('add task');
      console.log(task);
      this.subs.unsubscribe();
      this.taskService.showAddTask = false;
      return this.employerService.UpdateEmployer(employer);
    });
  }

}
