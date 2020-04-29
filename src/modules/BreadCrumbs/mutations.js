import { MUTATE } from './mutation-types';

export default {
    /**
    * @param { object } state
    * @param { array } data
    */
    [MUTATE](state, { data }) {
        state.data = data;
    },
};
