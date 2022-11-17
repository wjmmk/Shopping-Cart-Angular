import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { checkUsernameIsAvailable } from 'src/app/form-extensions';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeUsernameComponent implements OnInit {

  newUsernameControl = new FormControl('miNombreActual', {
    asyncValidators: checkUsernameIsAvailable(this.userService),
    updateOn: 'blur',
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

}
