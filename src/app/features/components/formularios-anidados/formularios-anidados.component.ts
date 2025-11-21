import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormulariosAnidadosHijoComponent } from '../formularios-anidados-hijo/formularios-anidados-hijo.component';

@Component({
  selector: 'app-formularios-anidados',
  imports: [CommonModule, ReactiveFormsModule, FormulariosAnidadosHijoComponent],
  templateUrl: './formularios-anidados.component.html',
  styleUrls: ['./formularios-anidados.component.css']
})
export class FormulariosAnidadosComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      direccion: this.fb.group({
        calle: ['', Validators.required],
        ciudad: ['', Validators.required],
        pais: ['', Validators.required]
      })
    });
  }

  enviar() {
    console.log(this.formulario.value);
  }

}
