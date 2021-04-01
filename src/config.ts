export const COMMADN_TYPE = [
  {
    label: '✨ dn init',
    detail: 'Initialize a dawn project',
    description: '（初始化工程）'
  },
  {
    label: '🚝 dn dev',
    detail: 'Adding project resources',
    description: '（启动开发服务）'
  },
  {
    label: '🧪 dn test',
    detail: 'Perform static code checking and testing',
    description: '（执行检查和测试）'
  },
  {
    label: '👷 dn build',
    detail: 'Build current project',
    description: '（构建工程）'
  },
  {
    label: '📙 dn publish',
    detail: 'Publish current project to target environment',
    description: '（发布工程）'
  },
  {
    label: '⏰ dn update',
    detail: 'Update remote configs and dependent modules',
    description: '（重装依赖）'
  },
  {
    label: '🙏 dn -h',
    detail: 'Display cli help information',
    description: '（帮助）'
  },
];


export const COMMANDS: any = {
  'vscode-dawn.dn.init': 'dn init',
  'vscode-dawn.dn.dev': 'dn dev',
  'vscode-dawn.dn.test': 'dn test',
  'vscode-dawn.dn.build': 'dn build',
  'vscode-dawn.dn.publish': 'dn publish',
  'vscode-dawn.dn.update': 'dn update',
  'vscode-dawn.dn.help': 'dn --help'
};