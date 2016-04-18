# phplike

this Repository is my sample code for node.js.

php like functions.

* isset
* issetOr
* empty
* is_null
* is_undefined
* array_column

## Usage
```php:sample
var phplike = require('phplike')

var isset = phplike.isset;
var issetOr = phplike.issetor;
var array_column = phplike.array_column;

var data = null;
if (isset(data)) {
  data = 1;
}

var array = [];
var string = null;
var int = 1;
var val = issetOr(array[0], string, int);
```
