import * as path from 'path'
import {workspace, ExtensionContext} from 'vscode'
import {LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions} from 'vscode-languageclient'

export function activate(context: ExtensionContext) {

    let config = workspace.getConfiguration('htmlhint')

    // We need to go one level up since an extension compile the js code into
    // the output folder.
    let serverModulePath = path.join(__dirname, '..', 'server', 'server.js')
    let debugOptions = {execArgv: ['--nolazy', '--inspect=6010'], cwd: process.cwd()}
    let serverOptions: ServerOptions = {
        run: {module: serverModulePath},
        debug: {module: serverModulePath, options: debugOptions}
    }

    // Get file types to lint from user settings
    let languages: string[] = config.get('documentSelector')
    let documentSelector = languages.map((language) => ({language, scheme: 'file'}))

    // Set options
    let clientOptions: LanguageClientOptions = {
        documentSelector,
        diagnosticCollectionName: 'htmlhint',
        synchronize: {
            configurationSection: 'htmlhint',
            fileEvents: workspace.createFileSystemWatcher('**/.htmlhintrc')
        }
    }

    let forceDebug = false
    let client = new LanguageClient('HTML-hint', serverOptions, clientOptions, forceDebug)
    context.subscriptions.push(new SettingMonitor(client, 'htmlhint.enable').start())
}
