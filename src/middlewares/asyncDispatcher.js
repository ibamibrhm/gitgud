const asyncDispatcher = (dispatch) => async (action) => {
  try {
    const asyncAction = await action;
    return dispatch(asyncAction);
  } catch (error) {
    return dispatch(error);
  }
};

export default asyncDispatcher;
