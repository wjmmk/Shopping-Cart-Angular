import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhonesComponent implements OnInit {

  phonesForm = new FormGroup({
    phones: new FormArray([]),
  });

  get phones(): FormArray {
    return this.phonesForm.get('phones') as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
  }

  addPhoneRow(): void {
    this.phones.push(new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]));
  }

  deletePhoneAtRow(index: number): void {
    this.phones.removeAt(index);
  }

}
