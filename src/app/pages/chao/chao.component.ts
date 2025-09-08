import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-chao',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <img src="/triste.jpg" style="width: 100px;">
    </div>

    <h2>Lista de tareas</h2>
    <ul>
      <li *ngFor="let tarea of tareas">
        <h3>{{ tarea.title }}</h3>
        <p>{{ tarea.description }}</p>
        <span>Completado: {{ tarea.completed }}</span>
      </li>
    </ul>
  `,
  styleUrls: ['./chao.component.css']
})
export class ChaoComponent implements OnInit {
  tareas: any[] = [];

  async ngOnInit() {
    await this.cargarTareas();
  }

  async cargarTareas() {
    try {
      const response = await axios.get(
        'https://demo-todo-java-eaezf7bpapa7adbn.canadacentral-01.azurewebsites.net/api/all-todo'
      );
      this.tareas = response.data;
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  }
}


