import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskFormComponent } from './task-form/task-form.component';



export const routes: Routes = [
  { path: 'form', component: TaskFormComponent },
  { path: 'list', component: TasksListComponent },
];
