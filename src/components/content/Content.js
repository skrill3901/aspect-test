import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import ContentInput from '../contentInput/ContentInput';
import ContentItem from '../contentItem/ContentItem';

import {changeContent} from '../../actions';

export const renderContent = (arr) => {
  return arr.map((item, i) => {
    return <ContentItem content={item} key={i}/>
  })
}

const setValue = (arr, path, value) => {
  let key = path.shift();
  if(key.indexOf('content') > -1) {
    path.unshift(key.match(/\d+/)[0]);
    key = 'content';
  }
  if (path.length) {
    setValue(arr[key], path, value)
  } else {
    arr[key] = value;
  }
}

const replaceFunc = (str, arr) => {
  for (let i = 0; i < arr.length; i++){
    str = str.replace(arr[i], `"${arr[i]}"`);
  }
  str = JSON.parse('{"obj":[' + str.replace(/'/g, '"') + ']}')
  return str;
}

const Content = () => {

  const content = useSelector(state => state.content);
  const dispatch = useDispatch();
  
  const onSetChange = (path, num, val) => {
    let elem = [...content];
    if (val === "true") (val = true);
    if (val === "false") (val = false);
    if (val.charAt(0) === '{') {
      const property = ['type', 'width', 'height', 'caption', 'visible', 'props'];
      val = replaceFunc(val, property).obj[0];
      // console.log(dsa.obj[0])
    }
    path ? setValue(elem[num], path, val) : elem.push(val)
    dispatch(changeContent(elem));
  }

  const elements = renderContent(content);

  return (
    <div className='content'>
      <ContentInput onChangeContent={onSetChange}/>
      <div className='content__list'>
        {elements}
      </div>
    </div>
  )
}
export default Content;