export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("header",
    {
      isComponent: (el) =>
        el &&
        el.tagName &&
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(el.tagName.toLowerCase()),
      extend: "text",
      model: {
        defaults: {
          "custom-name": "Header",
          tagName: opts.defaultTagName,
          traits: [
            {
              type: "select",
              options: [
                { value: "h1", name: opts.labelN1 },
                { value: "h2", name: opts.labelN2 },
                { value: "h3", name: opts.labelN3 },
                { value: "h4", name: opts.labelN4 },
                { value: "h5", name: opts.labelN5 },
                { value: "h6", name: opts.labelN6 },
              ],
              label: opts.labelTrait,
              name: "tagName",
              changeProp: 1,
            },
          ],
        },
      },
    })
};
