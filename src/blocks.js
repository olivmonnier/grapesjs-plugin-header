export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  
  bm.add('header', {
    label: 'Header',
    category: 'Basic',
    attributes: { class: 'fa fa-header' },
    content: {
      type: 'header',
      content: 'Insert your header text here',
      activeOnRender: 1
    }
  })
}
