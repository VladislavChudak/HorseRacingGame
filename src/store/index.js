import { createStore } from 'vuex';
import horses from './modules/horses';
import races from './modules/races';
import results from './modules/results';

export default createStore({
  modules: {
    horses,
    races,
    results,
  },
});
