import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios-anidados-hijo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formularios-anidados-hijo.component.html',
  styleUrls: ['./formularios-anidados-hijo.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class FormulariosAnidadosHijoComponent {
  @Input() formGroup!: FormGroup;

  constructor(private container: ControlContainer) {}

  ngOnInit(): void {
    // Esto solo obtiene el formGroup "direccion"
    const direccionGroup = this.container.control;
    console.log('Grupo direccion recibido:', direccionGroup);
  }
}


