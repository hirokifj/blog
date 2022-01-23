module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'component name? ex) Header',
  },
  {
    type: 'select',
    name: 'category',
    message: 'Which Atomic design level?',
    choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
  },
  {
    type: 'input',
    name: 'path',
    message: 'Where is the directory? (Optional)',
  },
  {
    type: 'toggle',
    name: 'withCSS',
    message: 'Add CSS to component?',
    disabled: 'n',
    enabled: 'y',
    initial: true,
  },
  {
    type: 'toggle',
    name: 'withStoryBook',
    message: 'Use Stroybook?',
    disabled: 'n',
    enabled: 'y',
    initial: true,
  },
]
