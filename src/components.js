export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  const textType = domc.getType('text');
  const textModel = textType.model;
  const textView = textType.view;

  domc.addType('header', {
    model: textModel.extend({
      defaults: Object.assign({}, textModel.prototype.defaults, {
        'custom-name': 'Header',
        attributes: { 'data-type': 'header' },
        tagName: 'h1',
        traits: [
          {
            type: 'select',
            options: [
              { value: 'h1', name: 'One (largest)'},
              { value: 'h2', name: 'Two' },
              { value: 'h3', name: 'Three' },
              { value: 'h4', name: 'Four' },
              { value: 'h5', name: 'Five' },
              { value: 'h6', name: 'Six (smallest)' }
            ],
            label: 'Size',
            name: 'tagName',
            changeProp: 1
          }
        ]
      }),
      init() {
        this.listenTo(this, "change:tagName", this.tagUpdated);
      },
      tagUpdated() {
        const coll = this.collection;
        const at = coll.indexOf(this);
        coll.remove(this);
        coll.add(this, { at });
      }
    }, {
      isComponent(el) {
        if (typeof el == 'string') {
          return { type: 'header' }
        }
      }
    }),
    view: textView
  })
  // ...
}
