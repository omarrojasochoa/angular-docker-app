import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formulario: FormGroup = new FormGroup({});
  isCheck: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      mensaje: new FormControl('', [
        Validators.maxLength(255),
        Validators.required,
      ]),
    });
  }
  sendForm(): void {
    if (this.formulario.valid) {
      /* alert('hola'); */
      this.isCheck = {
        name: this.formulario.value.name,
        email: this.formulario.value.email,
        mensaje: this.formulario.value.mensaje,
      };
      alert('Gracias por contactarnos');
    } else {
      return alert('LLENAR LOS DATOS CORRECTAMENTE.');
    }
  }
}
