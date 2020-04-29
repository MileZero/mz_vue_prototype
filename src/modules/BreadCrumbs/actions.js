import { MUTATE } from './mutation-types';

/**
* @param { function } commit
* @param { array } data
*/
export function set({ commit }, { data }) {
    commit(MUTATE, { data });
}
