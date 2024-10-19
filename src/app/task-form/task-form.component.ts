import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private taskService: TasksService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      urgent: [false],
    });
  }

  validateForm(): boolean {
    let isValid = true;

    // Validar título
    if (this.taskForm.get('title')?.invalid) {
      isValid = false;
      console.error('El título es requerido.');
    }

    // Validar descripción
    if (this.taskForm.get('description')?.invalid) {
      isValid = false;
      console.error('La descripción es requerida.');
    }

    return isValid;
  }

  onSubmit() {
    if (this.validateForm()) {
      this.taskService.createTask(this.taskForm.value).subscribe(
        (response) => {
          console.log('Tarea creada exitosamente:', response);
          this.taskForm.reset(); // Resetea el formulario después de enviar
        },
        (error) => {
          console.error('Error al crear la tarea:', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }
}
