# Website configuration

## Contact address

To change the email address which receive the message sent from the contact page : update `static/mail.php` at line 19.

## Website content

### Add a new excursion

Update the excursions number in `assets/script.js` at line 9.

Copy and rename the file `locales/<language>/excursion-template.js` to `locales/<language>/excursion-<excursion number>.js` fill it with the excursion content.

Add the needed images into `static/docs/excursion-<excursion number>/` folder.

The files `map_situation.jpg`, `map.jpg`, `cover.jpg` and the excursion document as PDF should be in this directory.

### Update an excursion

Update the corresponding excursion file in `locales/<language>/excursion-<excursion number>.js`.
