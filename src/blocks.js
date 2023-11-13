export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("header", {
    label: opts.labelBlock,
    category: opts.category,
    attributes: { class: "fa fa-header" },
    content: {
      type: "header",
      content: opts.placeholder,
      activeOnRender: 1,
    },
  });
}
