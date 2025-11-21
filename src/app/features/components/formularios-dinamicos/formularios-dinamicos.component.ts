import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-dinamicos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formularios-dinamicos.component.html',
  styleUrl: './formularios-dinamicos.component.css'
})
export class FormulariosDinamicosComponent implements OnInit {

  formulario: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      telefonos: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    });
  }

  get telefonos(): FormArray {
    return this.formulario.get('telefonos') as FormArray;
  }

  agregarTelefono() {
    this.telefonos.push(this.fb.control('', Validators.required));
  }

  eliminarTelefono(index: number) {
    this.telefonos.removeAt(index);
  }

  enviar() {
    console.log(this.formulario.value);
  }
}
