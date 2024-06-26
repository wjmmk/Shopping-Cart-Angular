import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent implements OnInit {

  addressForm = new FormGroup({
    addresses: new FormArray([]),
  });

  get address(): FormArray {
    return this.addressForm.get('addresses') as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
  }

  addPhoneRow(): void {
    this.address.push(new FormControl('', Validators.required));
  }

  deletePhoneAtRow(index: number): void {
    this.address.removeAt(index);
  }

}
