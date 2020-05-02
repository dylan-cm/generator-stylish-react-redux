"use strict";
const path = require("path");
const to = require("to-case");
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  prompting() {
    // Have Yeoman greet the user.
    this._welcome();

    const prompts = [
      {
        name: "projectName",
        type: "input",
        message: "Project name:",
        default: path.basename(this.destinationPath())
      },
      {
        name: "projectDescription",
        type: "input",
        message: "Project description:"
      },
      {
        name: "projectVersion",
        type: "input",
        message: "Project version:",
        default: "0.1.0"
      },
      {
        name: "authorName",
        type: "input",
        message: "Author name:",
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // public() {
    this.fs.copyTpl(
      this.templatePath("public/index.html"),
      this.destinationPath("public/index.html"),
      {
        projectName: to.title(this.props.projectName)
      }
    );
    this.fs.copyTpl(
      this.templatePath("public/manifest.json"),
      this.destinationPath("public/manifest.json"),
      {
        projectName: to.title(this.props.projectName)
      }
    );
    this.fs.copy(
      this.templatePath("public/favicon.ico"),
      this.destinationPath("public/favicon.ico")
    );
    this.fs.copy(
      this.templatePath("public/logo192.png"),
      this.destinationPath("public/logo192.png")
    );
    this.fs.copy(
      this.templatePath("public/logo512.png"),
      this.destinationPath("public/logo512.png")
    );
    this.fs.copy(
      this.templatePath("public/robots.txt"),
      this.destinationPath("public/robots.txt")
    );

    // readme() {
    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      {
        projectName: to.title(this.props.projectName)
      }
    );

    // gitignore() {
    this.fs.copy(
      this.templatePath("gitignore"),
      this.destinationPath(".gitignore")
    );

    // gitattributes() {
    this.fs.copy(
      this.templatePath("gitattributes"),
      this.destinationPath(".gitattributes")
    );

    // editorconfig() {
    this.fs.copy(
      this.templatePath("editorconfig"),
      this.destinationPath(".editorconfig")
    );

    // prettierrc() {
    this.fs.copy(
      this.templatePath("prettierrc"),
      this.destinationPath(".prettierrc")
    );

    // tsconfig.json
    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );

    // src() {
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: true
    });
    const deps = [
      "@emotion/core@^10.0.28",
      "@emotion/styled@^10.0.27",
      "@testing-library/jest-dom@^4.2.4",
      "@testing-library/react@^9.3.2",
      "@testing-library/user-event@^7.1.2",
      "@types/jest@^24.0.0",
      "@types/node@^12.0.0",
      "@types/react@^16.9.0",
      "@types/react-dom@^16.9.0",
      "@types/react-redux@^7.1.7",
      "@types/react-router-dom@^5.1.5",
      "@types/redux@^3.6.0",
      "@types/webpack-env@^1.15.2",
      "react@^16.13.1",
      "react-dom@^16.13.1",
      "react-redux@^7.2.0",
      "react-redux-firebase@^3.3.1",
      "react-router-dom@^5.1.2",
      "react-scripts@3.4.1",
      "redux@^4.0.5",
      "redux-devtools-extension@^2.13.8",
      "redux-thunk@^2.3.0",
      "typescript@~3.7.2"
    ];
    this.spawnCommandSync("git", ["init", "--quiet"]);
    this.npmInstall(deps, {
      save: true
    });
  }

  _welcome() {
    this.log(
      yosay(`Welcome to the ${chalk.magenta("stylish")} react-redux generator!`)
    );

    this.log(
      [
        chalk.red("CRA"),
        chalk.magenta("Emotion"),
        chalk.yellow("React"),
        chalk.green("Redux"),
        chalk.cyan("Router"),
        chalk.blue("TypeScript")
      ].join(" ~ ")
    );

    this.log("Happy Hacking Y'all - Yeehaw! \u{1F920}");
    this.log();
  }
};
