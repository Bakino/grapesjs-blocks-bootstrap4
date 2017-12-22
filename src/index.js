import grapesjs from 'grapesjs';
import loadTraits from './traits';
import loadComponents from './components';
import loadBlocks from './blocks';
import loadDevices from './devices';

export default grapesjs.plugins.add('grapesjs-blocks-bootstrap4', (editor, opts = {}) => {

  window.editor = editor;

  const opts_blocks = opts.blocks || {};
  const opts_labels = opts.labels || {};
  delete opts['blocks'];
  delete opts['labels'];

  const default_blocks = {
    // LAYOUT
    container: true,
    row: true,
    column: true,
    column_break: true,
    media_object: true,
    // COMPONENTS
    alert: true,
    badge: true,
    button: true,
    button_group: true,
    button_toolbar: true,
    // TYPOGRAPHY
    text: true,
    header: true,
    // BASIC
    image: true,
    list: true
  }

  const default_labels = {
    // LAYOUT
    container: 'Container',
    row: 'Row',
    column: 'Column',
    column_break: 'Column Break',
    media_object: 'Media Object',
    // COMPONENTS
    alert: 'Alert',
    badge: 'Badge',
    button: 'Button',
    button_group: 'Button Group',
    button_toolbar: 'Button Toolbar',
    // TYPOGRAPHY
    text: 'Text',
    header: 'Header',
    // BASIC
    image: 'Image',
    list: 'Simple List'
  }

  let options = { ...{
    blocks: Object.assign(default_blocks, opts_blocks),
    labels: Object.assign(default_labels, opts_labels),
    gridDevices: true,
    gridDevicesPanel: false,
  },  ...opts };

 editor.addComponents(`
    <style>

      /* Layout */

      .gjs-dashed .container, .gjs-dashed .container-fluid,
      .gjs-dashed .row,
      .gjs-dashed .col, .gjs-dashed [class^="col-"] {
        min-height: 1.5rem !important;
      }
      .gjs-dashed .w-100 {
        min-height: .25rem !important;
        background-color: rgba(0,0,0,0.1);
      }
      .gjs-dashed img {
        min-width: 25px;
        min-height: 25px;
        background-color: rgba(0,0,0,0.5);
      }

      /* Components */
      
      .gjs-dashed .btn-group,
      .gjs-dashed .btn-toolbar {
        padding-right: 1.5rem !important;
        min-height: 1.5rem !important;
      }

    </style>
  `);

  // Add components
  loadTraits(editor, options);
  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadDevices(editor, options);

  // TODO Remove
  //editor.on('load', () => editor.addComponents(`<div style="margin:0 100px; padding:25px;">Content loaded from the plugin</div>`))
});
