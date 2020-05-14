import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@yoshiji-sgtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
