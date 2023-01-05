import * as vscode from 'vscode';

export class AssetFileSystemProvider implements vscode.FileSystemProvider {
  constructor (context: vscode.ExtensionContext) {
    this._rootPath = context.extensionUri;
    this._files = {
      'first': vscode.Uri.joinPath(this._rootPath, 'media/pic00.jpg'),
      'second': vscode.Uri.joinPath(this._rootPath, 'media/pic01.jpg'),
      'third': vscode.Uri.joinPath(this._rootPath, 'media/pic02.jpg'),
    } as const;
  }

  private readonly _onDidChangeFile = new vscode.EventEmitter<vscode.FileChangeEvent[]>();
  public readonly onDidChangeFile = this._onDidChangeFile.event;

  private readonly _rootPath: vscode.Uri;

  private readonly _files: Record<string, vscode.Uri>;

  watch(uri: vscode.Uri, options: { readonly recursive: boolean; readonly excludes: readonly string[]; }): vscode.Disposable {
    throw new Error('Method not implemented.');
  }

  stat(uri: vscode.Uri): vscode.FileStat | Thenable<vscode.FileStat> {
    throw new Error('Method not implemented.');
  }

  readDirectory(uri: vscode.Uri): [string, vscode.FileType][] | Thenable<[string, vscode.FileType][]> {
    throw new Error('Method not implemented.');
  }

  createDirectory(uri: vscode.Uri): void | Thenable<void> {
    throw new Error('Method not implemented.');
  }

  readFile(uri: vscode.Uri): Uint8Array | Thenable<Uint8Array> {
    vscode.window.showInformationMessage(`Attempting to load ${uri.path}`);
    
    if(Object.keys(this._files).includes(uri.path)) {
      return vscode.workspace.fs.readFile(this._files[uri.path]);
    }

    throw vscode.FileSystemError.FileNotFound(uri);
  }

  writeFile(uri: vscode.Uri, content: Uint8Array, options: { readonly create: boolean; readonly overwrite: boolean; }): void | Thenable<void> {
    throw new Error('Method not implemented.');
  }

  delete(uri: vscode.Uri, options: { readonly recursive: boolean; }): void | Thenable<void> {
    throw new Error('Method not implemented.');
  }

  rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { readonly overwrite: boolean; }): void | Thenable<void> {
    throw new Error('Method not implemented.');
  }
  
  copy?(source: vscode.Uri, destination: vscode.Uri, options: { readonly overwrite: boolean; }): void | Thenable<void> {
    throw new Error('Method not implemented.');
  }

}