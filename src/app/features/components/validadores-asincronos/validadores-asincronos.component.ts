import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-validadores-asincronos',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './validadores-asincronos.component.html',
  styleUrl: './validadores-asincronos.component.css'
})
export class ValidadoresAsincronosComponent {

  formulario: any;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',
        [Validators.required, Validators.email],
        [this.emailDisponibleAsync]   // Validador asíncrono #1
      ],
      username: ['',
        [Validators.required],
        [this.usernameDisponibleAsync] // Validador asíncrono #2
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: this.passwordsIguales
    });
  }


  // -------------------------------
  //   VALIDADORES ASÍNCRONOS
  // -------------------------------

  emailDisponibleAsync = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const emailProhibido = 'existe@correo.com';

    return of(control.value).pipe(
      delay(800),
      map(value => value === emailProhibido ? { emailNoDisponible: true } : null)
    );
  }

  usernameDisponibleAsync = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const usernameTomado = 'admin';

    return of(control.value).pipe(
      delay(800),
      map(value => value === usernameTomado ? { usernameNoDisponible: true } : null)
    );
  }


  // -------------------------------
  //   VALIDADOR SINCRÓNICO
  // -------------------------------
  passwordsIguales(control: AbstractControl): ValidationErrors | null {
    const pass = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    return pass === confirm ? null : { noCoincide: true };
  }


  enviarFormulario() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log('Datos del formulario:', this.formulario.value);
  }
}
