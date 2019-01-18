Link to test site: [Good Time News](https://pacific-ocean-43015.herokuapp.com/)

# Right Now

Just work on styling to show

# Guidelines

## Visual

* white and blue color theme
* Under headers, lead article should appear like a banner of a banner
* Rest should be news papery with layout
* Important pages: Home, about, contact
* Tile pieces are a bit too close together
* If a new logo is thinkable, do it
* Main Headline is page-wide at top
* Maybe add a description for link only stories for larger sizes and perhaps medium sizes too. This will cut back on the linked only stories not taking up as much space as the pic'd stories
* Clean up navbar.
* Navbar will have home, about, contact(?), and search links.

#### Visual Thoughts

* Below main headline, two columns holding the features
* Maybe have the two columns have two sub-columns that only expand on screen-wide viewport
* Collapsible and expandable descriptions for smaller sizes
* Maybe only one pic story instead of two on same row for large size
* (two column page): Old main headlines on left, these have the picture, headline, small preview. The right side is just headlines of non-features
* Ad below where stories end? (above button to click for more stories)
* Title for pic stories over the pic?
* Pics for every story? Just smaller pics for the non leading stories and larger pics for the previous head banner stories?
* Needs more "happening" on landing page. A little more flash, but in a minute amount. 
* Background needed?
* Ads at bottom of article pages instead of throughout article
* Clear end of article (avoids tricking user to keep on scrolling for story that isn't there)


## Database implementations 

* Easily updatable front-page, latest article first
* Search tags implementation
* Split the array/object being parsed. eg pictured store 1-3 then text-link only stories 3-8; pictured > textlink > pictured > text-link etc. . .
* ^^ scripting to control layout, e.g. throwing them in a few different variables then mapped to the page in the respective variable location
* Maybe give the object a property that will be assigned on a load. After load, the property is set and won't be changed. This way, it won't change the position because of how items are being fed to the page for display.
* On smaller sizes combine the split arrays and then order by date
* A type-tag should accompany the article object, if it's a header or old header, only old headers will have pictures (this may change, but for now, this is the plan)
* Easy sharing to FaceBook and Twitter is a must
* Load more linked only stories than stories with picture (maybe)
* Have 10 at a time, take position of last article(s) and use that as a starting point to pull from database then load another 5, 10, 15, however more artiles at a time. A button will be below the last article to initiate this.
* On searching: make a separate landing page fore searches where the results are appended to the page. On a new search, this will empty the div that houses the results. The results will be one column only, with smaller sizes for the headers and same sizes for the smaller stories. Two input fields, one for title/description inclusions, the other for the date. If the date doesn't match, give notice, but throw out articles related to search. Searching may have strict functionality. A date or title/description portion must be included to initiate search.
* Secret login for site (editing, adding, removing)


# Near Future

* Rough implementation of Home page almost done, make a couple of new pages for about and contact. (Could also make a footer for the contact portion)
* Throw everything into components (within reason). This will make the overall code layout cleaner and easier to edit. Migrate appropriate css to the relevant component file path when doing so.
* Make it more accessible. Throw in "roles=''" in appropriate places. Avoid having no alt's on images(alt="" is better than no alt). Don't skip from h1 to h3, use appropriate headers and resize on specific headers if needed. Look up how to make site more accessible.

<!-- # Quick Visual Reference
* One possibility:

<img src="one-vis-reference.jpg" alt="ref"> -->

# Dependency Notes

* For CodeMirror to work on React, you have to `yarn add codemirror` and `yarn add react-codemirror`

The imports/requirements will be similar to as follows:

```javascript
import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import './pages.css';
require('codemirror/mode/markdown/markdown');
require('codemirror/lib/codemirror.css');
```

# Quick note 

If react auto-adds a .git file for you and you don't notice, you will be wondering why nothing is being pushed. Delete any .git files react makes for you. Your life will thank you for the added quality.

Be sure to delete it before you create another .git file