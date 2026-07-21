import { TicketType } from './ticket-type.model';

export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  image: string;
  organizerName: string;
  ticketTypes: TicketType[];
}
