import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import { AuthService } from '../auth.service';
import {UiService} from '../../shared/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;

  constructor(private authService: AuthService, private uiservice: UiService) {}

  ngOnInit() {
    this.loadingSubs = this.uiservice.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
      });
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }
}
