import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  const options = {
    ...{
      // default options
      category: "Basic",
      defaultTagName: "h1",
      labelN1: "One (largest)",
      labelN2: "Two",
      labelN3: "Three",
      labelN4: "Four",
      labelN5: "Five",
      labelN6: "Six (smallest)",
      labelBlock: "Header",
      labelTrait: "Size",
      placeholder: "Insert your header text here",
    },
    ...opts,
  };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
};