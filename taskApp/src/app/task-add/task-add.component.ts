import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import {TaskDataService} from '../services/task-data.service';
import { TaskDataServiceService } from '../task-data-service.service';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  task: Task;

  constructor( private taskDataService : TaskDataServiceService) { }

  ngOnInit() {
    this.task={title:'', description:'', priority:false}
    console.log('se inicia el objeto task');
  }

  add(): void{
    this.taskDataService.add(this.task);
    alert('se agrego nueva tarea');
  }

}
