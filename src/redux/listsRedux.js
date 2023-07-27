import shortid from 'shortid';
const ADD_LIST = 'app/lists/ADD_LIST';
const listsReducer = (statePart = [], action) => {

  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default listsReducer;