# mitro-cli

version: 0.1.3

[![Build Status](https://travis-ci.org/ruyadorno/mitro-cli.svg?branch=master)](https://travis-ci.org/ruyadorno/mitro-cli)
[![Coverage Status](https://img.shields.io/coveralls/paulohp/mitro-cli.svg)](https://coveralls.io/r/paulohp/mitro-cli)


## About

**Mitro CLI** is a better command line interface client for [Mitro](http://www.mitro.co/) password manager.


## Install

You can easily install this tool using [NPM](https://www.npmjs.org/):

```shell
npm install -g mitro-cli
```

Once installed you can invoke the **mitro** command from your terminal:

```shell
mitro
```


## Options

If no command is provided **Mitro CLI** will start in interactive mode, in this mode you are guided through some simple menus to access your stored data. This is the equivalent of running `mitro browse`.

### Authentication

In order to interact with **Mitro** servers you will need to provide your user id and password. If those are not provided the interface will ask you for it anytime you try to execute a command.

#### Example using username/password as command line arguments

```shell
mitro list --uid example@example.com --password mypassword
```

#### Creating a ~/.mitro-clirc file

Alternatively, you can create a `.mitro-clirc` file inside your *$HOME* directory and declare all your options there using json format.

```json
{
  "uid": "example@example.com"
}
```

*You could also add your password to the .mitro-clirc file but storing your master password as plain text is certainly not a great idea.*


## Usage

Running only the **mitro** command from the terminal brings you into the interactive mode, where you will be guided through some simple menus to access your stored data.

A set of commands is also available to interact with the **mitro** server:

- `mitro browse` Starts the CLI interactive mode, using an interface to navigate through your Mitro data
- `mitro list` List all your secrets and groups
- `mitro listsecrets` List all your secrets
- `mitro listgroups` List all your groups
- `mitro show SECRET_ID` Shows the content of a secret, you can find *SECRET_ID* using one of the list commands above


## Why creating another cli for Mitro?

I was in the search of an open-source password manager for a long time. Naturally, as soon as I heard the news about Mitro open-sourcing all their code, I jumped right in to try it but I was disapointed with the state of the available cli tool - one of my most wanted features.

What you find in this repository is the effort to have an user-friendly command line interface for managing your passwords.


## License

Copyright (c) 2014 Ruy Adorno. Licensed under the MIT license.
