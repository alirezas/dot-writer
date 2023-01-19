/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {EditorThemeClasses} from 'lexical';

import './Theme.css';

const theme: EditorThemeClasses = {
  blockCursor: 'Theme__blockCursor',
  characterLimit: 'Theme__characterLimit',
  code: 'Theme__code',
  codeHighlight: {
    atrule: 'Theme__tokenAttr',
    attr: 'Theme__tokenAttr',
    boolean: 'Theme__tokenProperty',
    builtin: 'Theme__tokenSelector',
    cdata: 'Theme__tokenComment',
    char: 'Theme__tokenSelector',
    class: 'Theme__tokenFunction',
    'class-name': 'Theme__tokenFunction',
    comment: 'Theme__tokenComment',
    constant: 'Theme__tokenProperty',
    deleted: 'Theme__tokenProperty',
    doctype: 'Theme__tokenComment',
    entity: 'Theme__tokenOperator',
    function: 'Theme__tokenFunction',
    important: 'Theme__tokenVariable',
    inserted: 'Theme__tokenSelector',
    keyword: 'Theme__tokenAttr',
    namespace: 'Theme__tokenVariable',
    number: 'Theme__tokenProperty',
    operator: 'Theme__tokenOperator',
    prolog: 'Theme__tokenComment',
    property: 'Theme__tokenProperty',
    punctuation: 'Theme__tokenPunctuation',
    regex: 'Theme__tokenVariable',
    selector: 'Theme__tokenSelector',
    string: 'Theme__tokenSelector',
    symbol: 'Theme__tokenProperty',
    tag: 'Theme__tokenProperty',
    url: 'Theme__tokenOperator',
    variable: 'Theme__tokenVariable',
  },
  embedBlock: {
    base: 'Theme__embedBlock',
    focus: 'Theme__embedBlockFocus',
  },
  hashtag: 'Theme__hashtag',
  heading: {
    h1: 'Theme__h1',
    h2: 'Theme__h2',
    h3: 'Theme__h3',
    h4: 'Theme__h4',
    h5: 'Theme__h5',
    h6: 'Theme__h6',
  },
  image: 'editor-image',
  link: 'Theme__link',
  list: {
    listitem: 'Theme__listItem',
    listitemChecked: 'Theme__listItemChecked',
    listitemUnchecked: 'Theme__listItemUnchecked',
    nested: {
      listitem: 'Theme__nestedListItem',
    },
    olDepth: [
      'Theme__ol1',
      'Theme__ol2',
      'Theme__ol3',
      'Theme__ol4',
      'Theme__ol5',
    ],
    ul: 'Theme__ul',
  },
  ltr: 'Theme__ltr',
  mark: 'Theme__mark',
  markOverlap: 'Theme__markOverlap',
  paragraph: 'Theme__paragraph',
  quote: 'Theme__quote',
  rtl: 'Theme__rtl',
  table: 'Theme__table',
  tableAddColumns: 'Theme__tableAddColumns',
  tableAddRows: 'Theme__tableAddRows',
  tableCell: 'Theme__tableCell',
  tableCellActionButton: 'Theme__tableCellActionButton',
  tableCellActionButtonContainer:
    'Theme__tableCellActionButtonContainer',
  tableCellEditing: 'Theme__tableCellEditing',
  tableCellHeader: 'Theme__tableCellHeader',
  tableCellPrimarySelected: 'Theme__tableCellPrimarySelected',
  tableCellResizer: 'Theme__tableCellResizer',
  tableCellSelected: 'Theme__tableCellSelected',
  tableCellSortedIndicator: 'Theme__tableCellSortedIndicator',
  tableResizeRuler: 'Theme__tableCellResizeRuler',
  tableSelected: 'Theme__tableSelected',
  text: {
    bold: 'Theme__textBold',
    code: 'Theme__textCode',
    italic: 'Theme__textItalic',
    strikethrough: 'Theme__textStrikethrough',
    subscript: 'Theme__textSubscript',
    superscript: 'Theme__textSuperscript',
    underline: 'Theme__textUnderline',
    underlineStrikethrough: 'Theme__textUnderlineStrikethrough',
  },
};

export default theme;
