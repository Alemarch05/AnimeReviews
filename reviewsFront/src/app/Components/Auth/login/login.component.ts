import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../../shared/material.component";
import { signal } from '@angular/core';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, CommonModule],
  standalone: true,
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup;
  constructor(
    private alertService: AlertService,
    private authService : AuthService,
    private router: Router
    ,private fb: FormBuilder
    ) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required, Validators.email],
      password: ['',Validators.required, Validators.minLength(6)]
    });
  }
    
 hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

onLogin(): void {
  if (this.loginForm.invalid) return
  const {email, password} = this.loginForm.value;
  this.alertService.showLoading('Iniciando sesión...');
   this.authService.login({email, password}).subscribe({
      next: () => {
        this.alertService.closeAlert(); // cerrar loading
        this.alertService.showAlertWithTimeout('Bienvenido', 'Has iniciado sesión correctamente');
        this.router.navigate(['/recomended']);
      },
      error: (err) => {
        this.alertService.closeAlert();
        this.alertService.showError('Error', err.error.message || 'Correo o contraseña incorrectos');
      }
    });
}

}
