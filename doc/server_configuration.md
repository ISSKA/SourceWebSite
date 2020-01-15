# Server configuration

## Infomaniak

Configuration for Infomaniak Hosting

### Environnement variables

Copy and rename the file `.env-template` to `.env` and add the correct configuration.

### .HTACCESS

Add this at the end of the `.htaccess` or create this file in the root directory of the server.

``` bash
# Redirect HTTP trafic to HTTPS
# https://faq.infomaniak.com/1961
RewriteEngine on
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule (.*) https://www.randosources.ch/$1 [R=301,L]
```
