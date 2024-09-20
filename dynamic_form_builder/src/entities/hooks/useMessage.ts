import { useCallback, useState } from "react";
import { TMessage } from "../types";
import dataBase from "../../db.json";

export function useMessages() {
  const [messages, setMessages] = useState<TMessage[]>([...dataBase]);

  const addMessage = useCallback((message: Omit<TMessage, 'id'>) => {
    setMessages(prevMessages => [
      ...prevMessages,
      { ...message, id: Date.now().toString() },
    ]);
  }, []);

  const editMessage = useCallback((id: string, updatedMessage: Partial<Omit<TMessage, 'id'>>) => {
    setMessages(prevMessages =>
      prevMessages.map(msg =>
        msg.id === id ? { ...msg, ...updatedMessage } : msg
      )
    );
  }, []);

  const deleteMessage = useCallback((id: string) => {
    setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
  }, []);

  return { messages, addMessage, editMessage, deleteMessage };
}