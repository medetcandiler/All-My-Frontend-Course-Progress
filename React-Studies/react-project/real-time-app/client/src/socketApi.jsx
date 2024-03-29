import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("sunucuya baglaniliyor");

  socket = io("http://localhost:3003", {
    transports: ["websocket"],
  });

  socket.on("connect", () =>
    console.log("sunucuya baglanti basarili bir sekilde gerceklesti.")
  );
};

export const send = (color) => {
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("send", (color) => {
    console.log(color, "receive from server");
    cb(color);
  });
};
