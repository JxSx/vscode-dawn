// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { COMMADN_TYPE } from './config';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let NEXT_TERM_ID = 1;

	const executeCommand = (comindline: string) => {
		if (comindline.includes('dev')) {
			vscode.window.showInformationMessage('开发服务启动中...');
		}
		const terminal: vscode.Terminal = vscode.window.createTerminal(`Dawn Terminal #${NEXT_TERM_ID++}`);
		terminal.show();
		terminal.sendText(comindline);
	};

	// 注册命令
	// const disposables = Object.keys(COMMANDS).map(key => {
	// 	return vscode.commands.registerCommand(key, () => {
	// 		executeCommand(COMMANDS[key]);
	// 	});
	// });

	// context.subscriptions.push(...disposables);

	let disposable = vscode.commands.registerCommand('vscode-dawn.showDawn', () => {
		vscode.window.showQuickPick(COMMADN_TYPE).then(item => {
			if (item && item.label) {
				executeCommand(item.label.substr(item.label.indexOf('dn')));
			}
		});
	});
	context.subscriptions.push(disposable);


	let myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
	myStatusBarItem.text = 'Dawn';
	myStatusBarItem.tooltip = 'Show Dawn Command Line';
	myStatusBarItem.command = 'vscode-dawn.showDawn';
	context.subscriptions.push(myStatusBarItem);
	myStatusBarItem.show();
}

// this method is called when your extension is deactivated
export function deactivate() { }
