import { Select } from './mutation-types';

/**
* @param { function } commit
* @param { string } SelectedPage
*/
export function setSelectedPage({ commit }, { SelectedPage }) {
    commit(Select, { SelectedPage });
}
