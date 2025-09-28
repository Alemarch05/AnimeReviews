import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../../shared/material.component";
import { signal } from '@angular/core';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  standalone: true,
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup;
    hide = true; // Mostrar/ocultar contraseña

  constructor(
    private alertService: AlertService,
    private authService : AuthService,
    private router: Router
    ,private fb: FormBuilder
    ) {
    this.loginForm = this.fb.group({
      u_email: ['',Validators.required, Validators.email],
      password: ['',Validators.required]
    });
  }
  


    
  onLogin(): void {
    alert();
   if (this.loginForm.invalid) return
   const {u_email, password} = this.loginForm.value;
   this.alertService.showLoading('Iniciando sesión...');
    this.authService.login({u_email, password}).subscribe({
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
