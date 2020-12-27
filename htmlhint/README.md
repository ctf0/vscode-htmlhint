# vscode-htmlhint

based on https://github.com/microsoft/vscode-htmlhint + new features

### New Feature

- use external config file
- make file types effectively configurable without limitations
- slightly smaller size

---

Integrates the [HTMLHint](https://github.com/htmlhint/HTMLHint) static analysis tool into Visual Studio Code.

The HTMLHint extension will attempt to use the locally installed HTMLHint module (the project-specific module if present, or a globally installed HTMLHint module).  If a locally installed HTMLHint isn't available, the extension will use the embedded version (current version 0.11.0).

The extension will attempt to use the locally installed HTMLHint module, otherwise the extension will use the embedded version (current version 0.11.0).

<br>

## Usage

The HTMLHint extension will run HTMLHint on your open HTML files and report the number of errors on the Status Bar with details in the Problems panel (**View** > **Problems**).

![status-bar](https://user-images.githubusercontent.com/7388088/76229862-8a33fc80-622b-11ea-846e-0d84c9d2cfb5.png)

Errors in HTML files are highlighted with squiggles and you can hover over the squiggles to see the error message.

![hover](https://user-images.githubusercontent.com/7388088/76229859-899b6600-622b-11ea-8d4d-11669e37dfc5.png)

>**Note:** HTMLHint will only analyze open HTML files and does not search for HTML files in your project folder.

<br>

## Rules

The HTMLHint extension uses the default [rules](https://github.com/htmlhint/HTMLHint/wiki/Usage#about-rules) provided by HTMLHint, or if you prefer you can change them as below ex.

```json
{
    "htmlhint.options": {
        "tagname-lowercase": false,
        "attr-lowercase": true,
        "attr-value-double-quotes":  true,
        "doctype-first": true
    }
}
```

<br>

## .htmlhintrc

you can either

- add a `.htmlhintrc` file in the root of your project folder.
- or an external one using the `htmlhint.optionsFile` option, ex.

    ```json
    "htmlhint.optionsFile": "/path/to/.htmlhintrc",
    ```

You can learn more about rule configuration at the HTMLHint [Usage page](https://github.com/htmlhint/HTMLHint/wiki/Usage#cli).

<br>

## Additional file types

if you'd like to use the HTMLHint extension with additional file types, then use `htmlhint.documentSelector` ex.

```json
{
  "htmlhint.documentSelector": [
    "html",
    "php",
    "etc..."
  ]
}
```

## Settings

The HTMLHint extension provides these [settings](https://code.visualstudio.com/docs/customization/userandworkspace):

* `htmlhint.enable` - disable the HTMLHint extension globally or per workspace.
* `htmlhint.documentSelector` - specify additional language services to be linted
* `htmlhint.options` - provide a rule set to override on disk `.htmlhintrc` or HTMLHint defaults.
* `htmlhint.configFile` - specify a custom HTMLHint configuration file. Please specify either 'htmlhint.configFile' or 'htmlhint.options', but not both.

You can change settings globally (**File** > **Preferences** > **User Settings**) or per workspace (**File** > **Preferences** > **Workspace Settings**). The **Preferences** menu is under **Code** on macOS.

Here's an example using the `htmlhint.documentSelector` and `htmlhint.options` settings:

```json
"htmlhint.documentSelector: [
    "html",
    "htm",
    "twig"
],
"htmlhint.options": {
    "tagname-lowercase": false,
    "attr-lowercase": true,
    "attr-value-double-quotes":  true,
    "doctype-first": true
}
```

Note that in order to have the linter apply to addi
