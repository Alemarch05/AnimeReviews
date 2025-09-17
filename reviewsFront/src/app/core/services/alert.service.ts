import { Injectable } from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showLoading(message: string = 'Por favor, espera...') {
    Swal.fire({
      title: message,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  closeAlert() {
    Swal.close();
  }

  showSuccess(title: string, message: string) {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonText: 'Aceptar'
    });
  }

  showError(title: string, message: string) {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonText: 'Aceptar'
    });
  }

  showWarning(title: string, message: string) {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      confirmButtonText: 'Aceptar'
    });
  }

  showConfirmation(title: string, message: string, confirmButtonText: string, cancelButtonText: string) {
    return Swal.fire({
      icon: 'question',
      title: title,
      text: message,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
  }

  showAlertWithTimeout(title: string, message: string, duration: number = 3000): void {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success', 
      timer: duration, 
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    });
  }
}
