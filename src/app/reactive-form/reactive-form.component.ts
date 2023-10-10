import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder) {}

  formulario = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],

    mensaje: ['', [Validators.required, Validators.maxLength(255)]],
  })

  onSubmit(): void {

    console.log(this.formulario);
    
    if (this.formulario.invalid) {
      alert('Formulario inválido')
    } else {
      console.log(this.formulario.value);
    }
  }
}

