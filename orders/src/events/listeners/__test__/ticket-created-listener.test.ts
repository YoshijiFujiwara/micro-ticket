import mongoose from "mongoose";
import { TicketCreatedListener } from "../ticket-created-listener";
import { natsWrapper } from "../../../nats-wrapper";
import { TicketCreatedEvent } from "@yoshiji-sgtickets/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../../models/ticket";

const setup = async () => {
  // create an instance of the listener
  const listener = new TicketCreatedListener(natsWrapper.client);
  // create a fake data event
  const data: TicketCreatedEvent["data"] = {
    version: 0,
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "コンサート",
    price: 1000,
    userId: new mongoose.Types.ObjectId().toHexString(),
  };

  // create a fake message object
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg };
};

it("creates ans saves a ticket", async () => {
  const { listener, data, msg } = await setup();

  // call the message function with the data object + 1 message object
  await listener.onMessage(data, msg);

  // write assertion to make sure a ticekt was created!
  const ticket = await Ticket.findById(data.id);

  expect(ticket).toBeDefined();
  expect(ticket!.title).toEqual(data.title);
  expect(ticket!.price).toEqual(data.price);
});

it("ack the message", async () => {
  const { data, listener, msg } = await setup();

  // call the onMessage funciton with the data object + 1 message object
  await listener.onMessage(data, msg);

  // write assertion to make fure ack function is called
  expect(msg.ack).toHaveBeenCalled();
});
