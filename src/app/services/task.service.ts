import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from './employer.service';


export interface Task{
  title: string,
  desc: string,
  endDate: Date,
  date: any,
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  showAddTask: boolean = false;

  constructor(
  ) {
   
  }

}