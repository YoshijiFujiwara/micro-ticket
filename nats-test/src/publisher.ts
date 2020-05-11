import nats from "node-nats-streaming";

const stan = nats.connect("ticketing", "abc", {
  /**
   * kubectl get pods
   * kubectl port-forward <nats-depl-hogehoge> 4222:4222
   */
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Publisher connected to NATS");

  const data = JSON.stringify({
    id: "123",
    title: "concert",
    price: 20,
  });

  stan.publish("ticket:created", data, () => {
    console.log("Event published");
  });
});
