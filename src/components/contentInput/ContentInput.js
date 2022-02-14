import {useState} from 'react'; 
import { useSelector } from 'react-redux';

const ContentInput = ({onChangeContent}) => {
  const [path, setPath] = useState('');
  const [val, setVal] = useState('');

  const handleChange = (e) => {
    e.target.name === 'path' ? setPath(e.target.value) : setVal(e.target.value);
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let num, pat;
    if (path !== '') {
      pat = path.split('.').splice(1);
      num = path.match(/\d+/)[0];
    } else {
      pat = '';
      num = '';
    }
    onChangeContent(pat, num, val);
  }
//content[0].props.width
  return (
    <form action="submit" className='content__input' onSubmit={onHandleSubmit}>
      <label>
        Путь:
        <input type="text" name="path" value={path} onChange={handleChange}/>
      </label>
      <label>
        Новое значение:
        <input type="text" name="value" value={val} onChange={handleChange}/>
      </label>
      <button type="submit">Применить</button>
    </form>
  )
}

export default ContentInput;