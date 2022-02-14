import { createSlice } from "@reduxjs/toolkit";

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

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    changeContent: (state, action) => {
      state.content = action.payload;
    }
  }
});

const {actions, reducer} = contentSlice;

export default reducer;
export const {
  changeContent
} = actions;