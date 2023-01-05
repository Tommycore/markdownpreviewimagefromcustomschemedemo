import * as vscode from 'vscode';
import { AssetFileSystemProvider } from './AssetFileSystemProvider';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.workspace.registerFileSystemProvider('asset', new AssetFileSystemProvider(context), {
    isCaseSensitive: true,
    isReadonly: true,
  });

	context.subscriptions.push(disposable);
}

export function deactivate() {}
