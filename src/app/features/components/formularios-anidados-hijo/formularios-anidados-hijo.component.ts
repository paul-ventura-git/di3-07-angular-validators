import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormBuilder, FormGroupDirective, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formularios-anidados-hijo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formularios-anidados-hijo.component.html',
  styleUrls: ['./formularios-anidados-hijo.component.css'],

  // Mantenerlos no afecta, pero ya no son necesarios para esta solución
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class FormulariosAnidadosHijoComponent {

  @Input() group!: FormGroup;   // Recibe el FormGroup desde el padre

}
