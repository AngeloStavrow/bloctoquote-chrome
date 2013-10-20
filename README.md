# Bloctoquote

## Information

Author: Angelo Stavrow<br>
E-mail: contact@angelostavrow.com<br>
Creation Date: 24 February, 2013<br>
Last Modified: 20 October, 2013<br>
Version: 1.1<br>
Licence: MIT/X11 ([Link](http://www.opensource.org/licenses/mit-license.php "OSI: The MIT License"))


## Description

This Chrome extension creates a context-menu entry that copies selected text and formats it per [Octopress](http://octopress.org/ "Octopress")'s blockquote syntax:

    {% blockquote [author] [link] [source_link_title] %}
    Quote string
    {% endblockquote %}

It then places this data on the system clipboard for easy copying into your favourite markdown editor.


## Usage

The user selects the text to be quoted and right-clicks to bring up Firefox's context menu. Upon choosing *Create Blockquote*, the selected text, page link, and page title are auto-filled in Octopress blockquote syntax.

The user can then paste the pre-formatted blockquote into their preferred text editor.

**Note:** The author data is not parsed; the user should replace the `Source` placeholder as appropriate. If the author name is made blank, then no source link/title is shown in the blockquote.

## Disclaimer

Please note that this add-on is third-party software and is not supported by, affiliated with, or even known to exist by the good folks that created and maintain Octopress. I wrote it to make my life easier, and wanted to share it with you.


## Changelog

### 1.1 (2013-10-20)

Cleaned up some development code.

### 1.0 (2013-02-24)

Initial release.