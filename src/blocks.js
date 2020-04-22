export default (editor, config = {}) => {
  const bm = editor.BlockManager;

  bm.add("header", {
    label: config.labelBlock,
    category: config.category,
    attributes: { class: "fa fa-header" },
    content: {
      type: "header",
      content: config.placeholder,
      activeOnRender: 1,
    },
  });
};
