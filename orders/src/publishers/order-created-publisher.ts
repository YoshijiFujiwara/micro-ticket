import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@yoshiji-sgtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
