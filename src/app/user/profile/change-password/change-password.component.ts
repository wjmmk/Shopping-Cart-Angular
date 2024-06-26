import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from 'src/app/form-extensions';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent implements OnInit {

  passwordChangeForm = new FormGroup({
      newPassword: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
    },
    passwordsMustBeEqual
  );

  constructor() { }

  ngOnInit(): void {
  }

}
