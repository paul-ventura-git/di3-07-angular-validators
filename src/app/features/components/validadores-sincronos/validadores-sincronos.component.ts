import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-validadores-sincronos',
  templateUrl: './validadores-sincronos.component.html',
  styleUrls: ['./validadores-sincronos.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class ValidadoresSincronosComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^[\w.-]+@[\w.-]+\.\w{2,4}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      edad: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      ciudad: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  enviarFormulario() {
    if (this.formulario.invalid) {
      alert('El formulario es inválido');
      return;
    }

    console.log('Datos enviados:', this.formulario.value);
    alert('Formulario enviado correctamente');
  }
}
