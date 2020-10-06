interface todoContent {
  content: string;
  isDone: boolean;
}
export const state = () => ({
  list: [
    {
      content: "test1",
      isDone: false
    },
    {
      content: "test2",
      isDone: false
    }
  ]
});

export const mutations = {
  add(state: { list: [todoContent] }, content: string) {
    if (content != "") state.list.push({ content: content, isDone: false });
  },
  delete(state: { list: [any] }, content: string) {
    state.list.splice(
      state.list.findIndex(c => c.content == content),
      1
    );
  },
  toggle(state: { list: [todoContent] }, todo: todoContent) {
    todo.isDone = !todo.isDone;
  }
};

export const getters = {
  list: (state: { list: [] }) => {
    return state.list;
  }
};
