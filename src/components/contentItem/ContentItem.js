import { renderContent } from "../content/Content"

const ContentItem = ({content}) => {

  const styles = {
    border: content.type === 'panel' ? '1px solid black' : '',
    width: `${content.props.width}px`,
    height: `${content.props.height}px`,
    display: content.props.visible ? 'block' : 'none'
  }

  switch (content.type) {
    case 'panel':
      return <div style={styles}>{content.content ? renderContent(content.content) : null}</div>
    case 'label':
      return <span style={styles}>{content.props.caption}</span>
    case 'button':
      return <button style={styles}>{content.props.caption}</button>
    //no default
  }

}
export default ContentItem;