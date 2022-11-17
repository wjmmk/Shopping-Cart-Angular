import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {

  model = {
    name: 'Un Nombre',
    email: 'un@email.es',
    message: 'Un Mensaje',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValue: any): void {
    //procesar envio
  }

}
