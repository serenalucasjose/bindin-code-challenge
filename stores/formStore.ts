import { defineStore } from 'pinia';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    forms: [] as any[],
  }),
  actions: {
    createForm(questions: any[]) {
      const form = {
        id: this.forms.length + 1,
        questions,
        responses: [],
      };
      this.forms.push(form);
    },
    respondForm(formId: number, responses: any[]) {
      const form = this.forms.find(f => f.id === formId);
      if (form) {
        form.responses.push(responses);
      }
    },
    getFormResponses(formId: number) {
      const form = this.forms.find(f => f.id === formId);
      return form ? form.responses : [];
    },
  },
});
