// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let NEXT_TERM_ID = 1;
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "dawn-plugin" is now active!');

  console.log("Terminals: " + (<any>vscode.window).terminals.length);

  const DN_COMMADNS: any = {
    "dawn-plugin.dn.init": () => {
      vscode.window.showInformationMessage('Dawn 初始化项目中...');

      const terminal = vscode.window.createTerminal(`Dawn Terminal #${NEXT_TERM_ID++}`);
      terminal.show();
      terminal.sendText('dn init');
    },
    "dawn-plugin.dn.dev": () => {
      vscode.window.showInformationMessage('Dawn 启动中....');

      const terminal = vscode.window.createTerminal(`Dawn Terminal #${NEXT_TERM_ID++}`);
      terminal.show();
      terminal.sendText('dn dev');
    }
  };
  // vscode.window.onDidOpenTerminal
  vscode.window.onDidOpenTerminal(terminal => {
    console.log("Terminal opened. Total count: " + (<any>vscode.window).terminals.length);
  });
  vscode.window.onDidOpenTerminal((terminal: vscode.Terminal) => {
    // vscode.window.showInformationMessage(`onDidOpenTerminal, name: ${terminal.name}`);
    console.log(`onDidOpenTerminal, name: ${terminal.name}`);
  });

  // vscode.window.onDidChangeActiveTerminal
  vscode.window.onDidChangeActiveTerminal(e => {
    console.log(`Active terminal changed, name=${e ? e.name : 'undefined'}`);
  });

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposables = Object.keys(DN_COMMADNS).map(key => {
    return vscode.commands.registerCommand(key, DN_COMMADNS[key]);
  })

  context.subscriptions.push(...disposables);
}

// this method is called when your extension is deactivated
export function deactivate() { }
