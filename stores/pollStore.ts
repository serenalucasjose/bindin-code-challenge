import { defineStore } from "pinia";

export const usePollStore = defineStore("pollStore", {
  state: () => ({
    polls: [] as {
      id: number;
      question: string;
      options: { text: string; votes: number }[];
    }[],
  }),
  actions: {
    createPoll(question: string, options: string[]) {
      const poll = {
        id: this.polls.length + 1,
        question,
        options: options.map((option) => ({ text: option, votes: 0 })),
      };
      this.polls.push(poll);
    },
    votePoll(pollId: number, optionIndex: number) {
      const poll = this.polls.find((p) => p.id === pollId);
      if (poll) {
        poll.options[optionIndex].votes += 1;
      }
    },
    getPollResults(pollId: number) {
      const poll = this.polls.find((p) => p.id === pollId);
      return poll
        ? poll.options.map((option) => ({
            text: option.text,
            votes: option.votes,
          }))
        : [];
    },
  },
});
