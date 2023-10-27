import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  mailTo(email: string) {
    return `mailto:${email}`;
  }
}
