module.exports = {
  commands: {
    browse: {
      welcome: 'Mitro CLI Client v{{version}}\n',
      initMenu: 'Welcome to interactive mode, select one of the available options:',
      listGroupsOpt: 'List all my teams',
      listSecretsOpt: 'List all my stored secrets',
      back: '<- Go Back',
      exit: '-> Exit',
      exitConfirmation: 'Leaving interactive mode. Bye!',
      error: 'Could not retrieve data. \n',
      listGroups: {
        menu: 'Select a team to edit:'
      },
      listSecrets: {
        menu: 'Select a secret to view/edit:'
      },
      getSecret: {
        menu: 'Select an option:',
        success: 'Successful read secret: '
      }
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
    },
    getSecret: {
      error: 'Could not retrieve secret. \n',
      success: 'Successful read secret: '
    }
  }
};

