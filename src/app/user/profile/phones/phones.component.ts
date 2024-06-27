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
    this.phones.push(new FormControl('', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{0,2}[-.\\s]?\\(?\\d{1,4}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$')]));
  }

  deletePhoneAtRow(index: number): void {
    this.phones.removeAt(index);
  }

}
