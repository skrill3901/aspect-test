const initialState = {
  content: [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true
      },
      content: [{
        type: 'label',
        props: {
          caption: 'test',
          visible: false
        }
      }],
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: false
      },
    },
    {
      type: 'button',
      props: {
        width: 100,
        height: 50,
        caption: 'button',
        visible: true
      },
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGING':
      return {
        content: action.payload
      }
    default: return state;
  }
}
export default reducer;