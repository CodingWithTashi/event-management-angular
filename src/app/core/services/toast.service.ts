import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: number;
  text: string;
  type: 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 0;
  toasts = signal<ToastMessage[]>([]);

  success(text: string) {
    this.show(text, 'success');
  }

  error(text: string) {
    this.show(text, 'error');
  }

  dismiss(id: number) {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }

  private show(text: string, type: 'success' | 'error') {
    const id = this.nextId++;
    this.toasts.update((list) => [...list, { id, text, type }]);
    setTimeout(() => this.dismiss(id), 4000);
  }
}
