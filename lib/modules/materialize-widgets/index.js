module.exports = {
  extend: 'apostrophe-widgets',
  name: 'materialize',
  label: 'Material Cards',
  contextualOnly: true,
    addFields: [
      {
        name: 'imageLeft',
        type: 'area'
      },
      {
        name: 'imageRight',
        type: 'area'
      }
    ]
  };