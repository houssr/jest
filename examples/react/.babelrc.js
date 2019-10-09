// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ]
};