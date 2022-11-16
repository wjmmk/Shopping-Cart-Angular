import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {

  isUserLoggedIn$ = this.authService.loggedIn$;

  @Output() closeDrawer = new EventEmitter<void>();
  @HostListener('click') onClick(): void {
    this.closeDrawer.emit();
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  logOut(): void {
    this.authService.logOut();
  }

}
