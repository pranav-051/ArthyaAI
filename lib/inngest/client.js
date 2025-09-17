import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "arthya_ai",
  name: "ArthyaAi",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, 
  }),
});
