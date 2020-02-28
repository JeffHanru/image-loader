export const simpleAction = () => dispatch => {
  dispatch({
    // todo: all type should be named as variable
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_aciton',
  })
}
