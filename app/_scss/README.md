### SCSS Partials

Partials are SCSS files named starting with the underscore (e.g. `_mypartial.scss`).

Partials are not built into CSS files, but they can be imported into other partials or normal SCSS files.

When you want to create a new SCSS file, you may want to import all the dependencies. To do this just write on top of the new file: 

    @import "partials/base";

When you want to create a new partial (and you want to use it in your whole application), remember to add it as an @import into `partials/_base.scss`

### Delete the demo template

Before starting, delete `delete_me.scss`, that just contains the rules for the demo template used as index.
