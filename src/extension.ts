// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { COMMANDS, COMMADN_TYPE } from './config';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let NEXT_TERM_ID = 1;

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-dawn" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	/*
	let disposable = vscode.commands.registerCommand('vscode-dawn.dn.dev', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vscode-dawn!');
	});*/
	const executeCommand = (comindline: string) => {
		if (comindline.includes('init')) {
			vscode.window.showInformationMessage('Dawn 初始化项目');
		} else if (comindline.includes('dev')) {
			vscode.window.showInformationMessage('Dawn 启动中...');
		}
		const terminal: vscode.Terminal = vscode.window.createTerminal(`Dawn Terminal #${NEXT_TERM_ID++}`);
		terminal.show();
		terminal.sendText(comindline);
	};

	const disposables = Object.keys(COMMANDS).map(key => {
		return vscode.commands.registerCommand(key, () => {
			executeCommand(COMMANDS[key]);
		});
	});

	context.subscriptions.push(...disposables);

	// 在Source Control面板增加入口
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
