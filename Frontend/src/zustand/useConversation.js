import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversations: null,
  setSelectedConversations: (selectedConversations) =>
    set({ selectedConversations }),
  messeges: [],
  setMesseges: (messeges) => set({ messeges }),
}));

export default useConversation;
