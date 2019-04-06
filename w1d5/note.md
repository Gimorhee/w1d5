# w1d5 - Modules & Testing

1. Npm

- Github repos are owned by an individual and they can add other collaborators with read and/or write access.
- node_modules directory/folder: Most npm modules have dependencies. These are installed by npm into this subfolder. Typically this file is gitignored and not checked into your repo.
- package.json and package-lock.json which together define what to (re)install into node_modules if/when we run 'npm install' in our project folder.

2. Modules

```
var person = {
  firstName = 'Danny',
  LastNAme = 'Rhee',
  fullName: function() {
    return this.firstName + this.lastName;
  }
}

module.exports = person;

or

module.exports = function () {
  console.log("hello");
}


-----------------------------------------------------------------------------------------------------------


var person - require('./person.js');
var c = require('colors/safe');

Testing Examples (just exaple, use Mocha/Chai for testing!)
  console.log('From person.js, Fullname should be Danny Rhee: ' + person.fullName());

  if(person.fullName() === 'Danny Rhee'){
    console.log(c.green('SUCCESS!'));
  } else {
    console.log(c.red('FAIL'));
  }

```

- Every file has access to 'module'
- If we console.log this we see that ' module.exports = {} '
- When we try to require or 'person.js' it can't find it. That's because it looks inside the 'node_modules' folder for a directory named 'person.js'
  - We fixed this by adding a relative path to the file " require './person.js' "
  - BTW the '.js' is not needed: "require './person' " works just the same.
  - However, we only get back '{}' when requiring that file. We were hoping to get back the person object with firstName, lastName, etc.
  - Using 'module.exports' in 'person.js', we exported the object from theat file
  - Now our index.js is able to access the exported object from person.js


3. Testing with Mocha & Chai
- Chai: Gives us functions to assert expectations. If an assertion function fails, it throws an error.
- Mochae: Test running framework to help us organize and manage our various test cases. Each test case ("it") can be organized in different groups  ("describe"s). Helps us with nicer output and managin errors thrown by our assertion library (chai).
-----------------------------------------------------------------------------------------------------------
- npm install chai / mocha (no requiring but need to be used in node)

var assert = require('chai').assert;

describe('person.fullName', function() {                                        < Mocha
  it('should return the default first and last name', function(){
    assert.equal(person.fullName(), 'Danny Rhee');                              < Chai
  });
});


