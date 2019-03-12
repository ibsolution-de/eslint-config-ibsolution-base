module.exports = {
    rules: {
        'accessor-pairs': 'off',
        indent: [2, 4, { SwitchCase: 1 }],
        quotes: [1, 'single', { avoidEscape: true }],
        'jsx-quotes': [2, 'prefer-single'],
        'linebreak-style': [2, 'unix'],
        semi: [2, 'always'],
        strict: [2, 'function'],
        'no-multiple-empty-lines': [2, { max: 1 }],
        'max-len': ['error', { code: 120 }]
    }
};
