// to intialize package.json file with defauts -> npm init -y

// 1. difference between dependencies and devDependencies
// dependencies: It contains the packages which we used in projcet(dev and prod),npm i package_name
// devDependencies: It contains the packages but which we can use in dev and local only not in PROD.
// devDependencies --> Need for local development and testing.(npm i package_name --save-dev)

// 2. envirnoment and evnirnoment variables
// envirnoment -> local, dev, prod
// envirnoment variables -> env variables are global variables which we can define in .env file we can access throught process.env.KEY_NAME

// 3. What is NPM
// which is node package manager, we can install packages through it(eg: npm i package_name),
// It managing all packages and modules

// 4. what is module in nodeJS.
// It is used to encapsulate all the related codes into a single unit of code. shifting into all related functions into single file
// we can write the code separeate files so that we can wherever we want.
// we can export that files and we can use.
// type import -> file name(before import we need exports)
// two types of exports Default exports, Named exports
// Defaults Exports -> In which can export default one funtcion,
// Named Exports -> In which we can exports multiple functions.

// 5. package.json --> This file holds that metadata about particular project. It present in root directory of a appilcations or modules

// 6. Diff between Library and Framework.
// Library: library which is collections of pre-written functions or methods. we can use as we need.
// Framework: Framework skelton of particular application, we can write the code into it, and framework calls our code. template