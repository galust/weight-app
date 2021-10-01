const reducers = {
    toggleModal: (state, action) => {
        const { payload } = action;
        state.modal = payload ? payload : !state.modal;
    },
    addItem: (state, action) => {
        const { payload } = action;
        state.items = state.items.concat(payload);
        localStorage.setItem('items',JSON.stringify(state.items));
    },
    clearItems: (state) => {
        state.items = [];
        state.selected = [];
        localStorage.removeItem('items');
    },
    selectItems: (state,action) => {
        const { payload } = action;
        state.selected = payload;
    }
}
export default reducers;