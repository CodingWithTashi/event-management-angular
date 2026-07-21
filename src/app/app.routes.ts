import { Routes } from '@angular/router';
import { EventsList } from './features/events/events-list/events-list';
import { EventDetails } from './features/events/event-details/event-details';
import { BookingFlow } from './features/booking/booking-flow/booking-flow';
import { BookingsList } from './features/bookings/bookings-list/bookings-list';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventsList },
  { path: 'events/:id', component: EventDetails },
  { path: 'events/:id/book', component: BookingFlow },
  { path: 'my-bookings', component: BookingsList },
];
