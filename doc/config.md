# Server configuration

Configuration for Infomaniak Hosting

## .HTACCESS

Add this to your `.htaccess` :

``` bash
# Redirect HTTP trafic to HTTPS
# https://faq.infomaniak.com/1961
RewriteEngine on
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule (.*) https://sources.isska.ch/$1 [R=301,L]
```