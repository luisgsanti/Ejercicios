import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskDataService } from '../services/task-data.service';
import { TaskDataServiceService } from '../task-data-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : Task[];
  constructor(private taskDataService: TaskDataServiceService) { }

  ngOnInit() {
    this.tasks = this.taskDataService.getAll();
  }

}
