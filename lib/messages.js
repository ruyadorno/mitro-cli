module.exports = {
  commands: {
    browse: {
      welcome: 'Mitro CLI v{{version}}\n',
      initMenu: 'Welcome to interactive mode, select one of the available options:',
      listGroups: 'List all my teams',
      listSecrets: 'List all my stored secrets',
      exit: 'Exit',
      exitConfirmation: 'Leaving interactive mode. Bye!'
    },
    listAll: {
      secretsTitle: '\nSecrets:',
      groupsTitle: '\nTeams:',
      error: 'Could not retrieve secrets or teams. \n',
      success: 'Listing teams and secrets for user: '
    },
    listGroups: {
      separator: ' - ',
      error: 'Could not retrieve teams. \n',
      success: 'Listing teams for user: '
    },
    listSecrets: {
      separator: ' - ',
      error: 'Could not retrieve secrets. \n',
      success: 'Listing secrets for user: '
    }
  }
};

