
//actions
const createActionName = actionName => `app/lists/${actionName}`;
export const REMOVE_CARD = createActionName('REMOVE_CARD');

//action creators

export const removeCard = payload => ({ type: REMOVE_CARD, payload });

