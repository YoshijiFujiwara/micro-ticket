import {
  Publisher,
  TicketCreatedEvent,
  Subjects,
} from "@yoshiji-sgtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
