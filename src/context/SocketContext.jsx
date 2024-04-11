import React, { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { io } from "socket.io-client";

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:3006",{
        query:{
          userId: authUser._id
        }
      })
      setSocket(newSocket);

    newSocket.on("getOnlineUsers",(users)=>{
      setOnlineUsers(users)
    })

      return () => {
        newSocket.close();
      }; 
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser, socket]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
