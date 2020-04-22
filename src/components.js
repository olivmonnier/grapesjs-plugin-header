export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const textType = domc.getType("text");
  const textModel = textType.model;
  const textView = textType.view;

  domc.addType("header", {
    model: textModel.extend(
      {
        defaults: Object.assign({}, textModel.prototype.defaults, {
          "custom-name": "Header",
          tagName: config.defaultTagName,
          traits: [
            {
              type: "select",
              options: [
                { value: "h1", name: config.labelN1 },
                { value: "h2", name: config.labelN2 },
                { value: "h3", name: config.labelN3 },
                { value: "h4", name: config.labelN4 },
                { value: "h5", name: config.labelN5 },
                { value: "h6", name: config.labelN6 },
              ],
              label: config.labelTrait,
              name: "tagName",
              changeProp: 1,
            },
          ],
        }),
      },
      {
        isComponent(el) {
          if (
            el &&
            el.tagName &&
            ["H1", "H2", "H3", "H4", "H5", "H6"].includes(el.tagName)
          ) {
            return { type: "header" };
          }
        },
      }
    ),
    view: textView,
  });
};
