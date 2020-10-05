export const state = () => ({
  list: [
    {
      content: "test1"
    },
    {
      content: "test2"
    }
  ]
});

export const mutations = {
  add(state: { list: [any] }, content: string) {
    state.list.push({ content: content });
  },
  delete(state: { list: [any] }, content: string) {
    state.list.splice(
      state.list.findIndex(c => c.content == content),
      1
    );
  }
};

export const getters = {
  list: (state: { list: [] }) => {
    return state.list;
  }
};
