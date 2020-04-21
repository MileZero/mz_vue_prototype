import { Select } from './mutation-types';

export default {
    /**
    * @param { SelectedPageState } state
    * @param { string } SelectedPage
    */
    [Select](state, { SelectedPage }) {
        state.SelectedPage = SelectedPage;
    },
};
