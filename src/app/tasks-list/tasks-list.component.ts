import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent implements OnInit {
  tasks: any[] = [];
  constructor(private tasksService: TasksService ){}
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(tasks=>{
      this.tasks = tasks;
    })
  }
}
