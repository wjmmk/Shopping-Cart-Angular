import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit, OnDestroy {

  isUserLoggedIn!: boolean;

  private subscription!: Subscription;

  @Output() closeDrawer = new EventEmitter<void>();
  @HostListener('click') onClick(): void {
    this.closeDrawer.emit();
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.loggedIn$.subscribe(
      (loggedIn) => (this.isUserLoggedIn = loggedIn)
    );
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  logOut(): void {
    this.authService.logOut();
  }

}
