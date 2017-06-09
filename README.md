# README #

This README would normally document whatever steps are necessary to get your application up and running.

### How do I get set up? ###
```
$ git clone https://github.com/aaa59891/node_empty_web.git
$ cd node_empty_web
$ npm install
```
### Configuration setting: ###

  this repo has three env: **prod**, **stage**, **test**

  you can set all share config in **/conf/default.json**,

  then set the different fields in **/conf/prod/config.json** OR **/conf/stage/config.json** OR **/conf/test/config.json**  

### How do I run this repo? ###

Three run commands in different env:

* Testing: 
```
$ npm test
```
* Stage env:
```
$ npm run stage
```
* Prod  env:
```
$ npm run prod
```
