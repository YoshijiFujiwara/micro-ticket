import {
  Publisher,
  TicketUpdatedEvent,
  Subjects,
} from "@yoshiji-sgtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
