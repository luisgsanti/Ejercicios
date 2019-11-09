import { Injectable } from '@angular/core';
import { Task } from '../app/models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskDataServiceService {

  constructor() { }

  add(task: Task){

    let tasks: Task[]=[];
    if(localStorage.getItem('tasks')!=null){
      tasks=JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }

  getAll(): Task[]{
    return JSON.parse(localStorage.getItem('tasks'));
  }

}
