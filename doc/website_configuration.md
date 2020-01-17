# Website configuration

## Contact address

To change the email address which receive the message sent from the contact page : update `static/mail.php` at line 19.

## Website content

### Images structure

#### `static/img/background.jpg`

Header images of all pages (excluding excursions pages which have its dedicated header image).

- Width: maximal (minimum of 1000px, 2000px is better)
- Height: min 500px

#### `static/docs/excursion-<excursion number>/cover.jpg`

Header image of the excursion page.

- Width: maximal (minimum of 1000px, 2000px is better)
- Height: min 200px

#### `static/docs/excursion-<excursion number>/card.jpg`

Excursion image cards.

> Not implemented ! We use the cover image for now.

- Width: min 600px (max 1200px)
- Height: min 250px (max 500px)

#### `static/docs/excursion-<excursion number>/map_situation.jpg`

The situation map displayed on the top of an excursion page.

- Width: min 500px
- Height: min 500px
- Format: square

#### `static/docs/excursion-<excursion number>/map.jpg`

The map with the path to follow displayed on the excursion page.

- Width: maximal (minimum of 1000px, 2000px is better)
- Height: 600px 

#### `static/docs/excursion-<excursion number>/<fiche name>`

The PDF document with all the excursion informations.

#### `static/docs/excursion-<excursion number>/<extra-<extra number>/img-<image number>.jpg`

Extra image used as illustration.

#### `static/docs/excursion-<excursion number>/<extra-<extra number>/cover.jpg`

Extra image cards.

> The image name could be defined in the excursions data, an illustration image of the excursion can be used in place of the cover.

- Width: 600px
- Height: 300px

This images are displayed as square too, so they should fit with a 300x300px format too.

### Add a new excursion

Update the total excursions number in `assets/script.js` at line 9.

Copy and rename the file `locales/<language>/excursion-template.js` to `locales/<language>/excursion-<excursion number>.js` fill it with the excursion content.

Add the needed images into `static/docs/excursion-<excursion number>/` folder.

The files `map_situation.jpg`, `map.jpg`, `cover.jpg` and the excursion document as PDF should be in this directory.

### Update an excursion

Update the corresponding excursion data in `locales/<language>/excursion-<excursion number>.js` or images in `static/docs/excursion-<excursion number>/`.
