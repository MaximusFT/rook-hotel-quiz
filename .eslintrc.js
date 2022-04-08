module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'plugin:css-modules/recommended'],
  plugins: ['prettier', 'css-modules', 'react', 'react-hooks'],
  env: {
    browser: true,
    es2020: true,
    es2021: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    camelcase: 0,
    'consistent-return': 0,
    'default-param-last': 0,
    'newline-per-chained-call': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'import/no-import-module-exports': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 1,
    'import/order': 1,
    indent: 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/alt-text': 0,
    'new-cap': [
      'error',
      {
        capIsNewExceptions: ['List', 'Map', 'Set', 'Record', 'OrderedMap'],
      },
    ],
    'no-unused-vars': 1,
    'no-console': 0,
    'no-else-return': 0,
    'no-restricted-globals': 0,
    'no-mixed-operators': 0,
    'no-nested-ternary': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['error', { allow: ['_isMounted', '__html', '__', '_embedded'] }],
    'prefer-destructuring': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': [0, 'always'],
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': 0,
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/require-default-props': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/jsx-no-bind': ['error', { allowFunctions: true, allowArrowFunctions: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'constructor',
          'state',
          'initialState',
          'static-methods',
          'lifecycle',
          'fetching',
          'everything-else',
          'rendering',
        ],
        groups: {
          fetching: ['fetchDataIfNeded', 'fetch.+IfNeeded'],
          rendering: ['renderLoader', 'renderError', 'renderNoData', '/^render.+$/', 'render'],
        },
      },
    ],
    'import/no-webpack-loader-syntax': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      webpack: {
        config: './server/webpack/webpack.config.dev.js',
      },
    },
  },
};
