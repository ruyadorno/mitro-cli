# mitro-cli

version: 0.0.0

[WIP]


## About

This is a better command line interface for using the [Mitro](http://www.mitro.co/) password manager.


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

In order to interact with **Mitro** cloud servers you will need to provider your user id and password everytime you execute a command.

### Example user/pass as command line arguments

```shell

mitro list --uid example@example.com --password mypassword
```

Alternatively, you can create a `.mitro-clirc` file inside your *$HOME* directory and declare all your options there using json format.

### ~/.mitro-clirc example file

```json
{
  "uid": "example@example.com"
}
```


## Usage

Running only the **mitro** command from the terminal brings you into the interactive mode, where you can choose what to execute.

A set of commands is also available to interact with the **mitro** server:

- `mitro list-secrets` List all your secrets
- `mitro list-groups` List all your groups
- `mitro list-all` List all your secrets and groups


## Why creating another cli for Mitro?

I was in the search of an open-source password manager for a long time. Naturally, as soon as I heard the news about Mitro open-sourcing all their code, I jumped right in to try it but I was disapointed with the state of the available cli tool - one of my most wanted features.

What you find in this repository is the effort to have an user-friendly command line interface for managing your passwords.


## License

Copyright (c) 2014 Ruy Adorno. Licensed under the MIT license.

