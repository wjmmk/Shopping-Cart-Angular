import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { ChangeUsernameComponent } from './profile/change-username/change-username.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { PhonesComponent } from './profile/phones/phones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormExtensionsModule } from '../form-extensions/form-extensions.module';
import { AddressComponent } from './profile/address/address.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ChangeUsernameComponent,
    ChangePasswordComponent,
    PhonesComponent,
    AddressComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormExtensionsModule,
  ],
})
export class UserModule {}
