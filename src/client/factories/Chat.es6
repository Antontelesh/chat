export default function Chat (url, dispatch) {

  let socket;

  const connect = (username) => {
    let resolved = false;
    return new Promise((resolve, reject) => {
      socket = new WebSocket(`${url}?username=${username}`);
      socket.onerror = reject;
      socket.onmessage = event => {
        let data = JSON.parse(event.data);

        if (resolved) {
          dispatch(data);
        } else {
          resolve(data.chat);
          resolved = true;
        }

      };
      socket.onclose = event => {
        reject(event.reason);
      };
    });
  };

  const sendMessage = message => {
    socket.send(message);
  };


  return {connect, sendMessage};

}
