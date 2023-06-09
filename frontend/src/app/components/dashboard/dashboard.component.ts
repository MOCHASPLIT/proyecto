import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  listTask: Task[] = []

  constructor(
    private _taskService:TaskService){
  }
  
  ngOnInit(): void {
      this.getTasks();
  }

  getTasks(){
    this._taskService.getTasks().subscribe(data => {
      this.listTask = data;  
    })
  }
}
