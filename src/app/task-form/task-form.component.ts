import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  task: any = {
    title: '',
    description: '',
    urgent: false,
  };

  constructor(private taskService: TasksService) {}

  onSubmit() {
    this.taskService.createTask(this.task).subscribe(
      (response) => {
        console.log('Tarea creada exitosamente:', response);
        // Limpiar el formulario restableciendo el objeto task
        this.task = {
          title: '',
          description: '',
          urgent: false,
        };
      },
      (error) => {
        console.error('Error al crear la tarea:', error);
      }
    );
  }
}
