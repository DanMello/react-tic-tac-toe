import { useState, useEffect } from 'react';

export default function useWebSocket({config}) {
  
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log(config)
    let url;
    if (config.environment === 'development') {
      url = 'ws://localhost:3003/';
    } else if (config.isMobile) {
      url = 'wss://m.mellocloud.com/ws';
    } else {
      url = 'wss://mellocloud.com/ws';
    };
    const s = new WebSocket(url);
    function open () {
      setSocket(s);
    };
    s.addEventListener('open', open);
  }, [])
  return {
    socket
  };
}