import io from 'socket.io-client';

let socket;

export const init= () => {
  console.log('sunucuya baglaniliyor');
  socket = io('http://localhost:3001', {
    transports: ['websocket']
  });
  socket.on('connect', () => console.log('sunucuya baglanti basarili bir sekilde gerceklesti.'))
};