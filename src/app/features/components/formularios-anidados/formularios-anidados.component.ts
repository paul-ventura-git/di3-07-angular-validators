import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormulariosAnidadosHijoComponent } from '../formularios-anidados-hijo/formularios-anidados-hijo.component';

@Component({
  selector: 'app-formularios-anidados',
  imports: [CommonModule, ReactiveFormsModule, FormulariosAnidadosHijoComponent],
  templateUrl: './formularios-anidados.component.html',
  styleUrl: './formularios-anidados.component.css'
})
export class FormulariosAnidadosComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      direccion: this.fb.group({
        calle: [''],
        ciudad: [''],
        codigoPostal: ['']
      })
    });
  }

  enviar() {
    console.log(this.formulario.value);
  }
}
