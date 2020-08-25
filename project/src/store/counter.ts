export const state = () => ({
  counter: 0
 })
 
 export const mutations = {
  increase(state: { counter: number }) {
    state.counter++
  },
  decrease(state: { counter: number }) {
    state.counter--
  }
 }

 export const getters = {
  counter: (state: { counter: number }) => {
    return state.counter
  }
}