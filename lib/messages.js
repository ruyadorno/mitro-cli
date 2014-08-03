module.exports = {
  commands: {
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

