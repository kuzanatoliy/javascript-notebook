module.exports = {
  env: {
    jest: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [2, require('./.prettierrc.js')],

    // Possible problems
    'array-callback-return': [
      'error',
      { allowImplicit: false, checkForEach: false, allowVoid: false },
    ],
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: false }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': ['error', { allowObjectPatternsAsParameters: false }],
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': ['error', { typeof: true }],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
    'no-useless-backreference': 'error',
    'require-atomic-updates': ['error', { allowProperties: false }],
    'use-isnan': [
      'error',
      { enforceForSwitchCase: true, enforceForIndexOf: false },
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // Suggestions
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: true,
        enforceForClassMembers: true,
      },
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'block-scoped-var': 'error',
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        allow: [],
      },
    ],
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: '',
        ignoreInlineComments: false,
        ignoreConsecutiveComments: false,
      },
    ],
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'error',
    'consistent-this': 'off',
    curly: ['error', 'all'],
    'default-case': 'off',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    'func-name-matching': 'off',
    'func-names': ['error', 'as-needed'],
    'func-style': 'off',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'logical-assignment-operators': ['error', 'never'],
    'max-classes-per-file': ['error', 1],
    'max-depth': ['error', 3],
    'max-lines': [
      'error',
      { max: 150, skipBlankLines: true, skipComments: true },
    ],
    'max-lines-per-function': [
      'error',
      { max: 50, skipBlankLines: true, skipComments: true, IIFEs: false },
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements': 'off',
    'multiline-comment-style': ['error', 'starred-block'],
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-console': 'warn',
    'no-continue': 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-function': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    'no-extra-label': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': ['error', { lexicalBindings: false }],
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': ['error', { capIsConstructor: false }],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowSwitch: true, allowLoop: false }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-assign': ['error', { ignoreNonDeclaration: false }],
    'no-multi-str': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-object-constructor': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-sequences': 'off',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: ['error', 'as-needed'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    'sort-vars': 'error',
    strict: 'off',
    'symbol-description': 'error',
    'vars-on-top': 'error',
    yoda: ['error', 'never'],

    // Layout & Formatting
    'line-comment-position': 'off',
    'unicode-bom': 'off',
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'max-lines': 'off',
        'sort-keys': 'off',
      },
    },
  ],
};
