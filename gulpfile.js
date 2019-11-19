'use strict'

const gulp = require('gulp')
const gutil = require('gulp-util')
const ftp = require('vinyl-ftp')

require('dotenv').config()

/** Configuration **/
const user = process.env.FTP_USER
const password = process.env.FTP_PASSWORD
const host = 'ops.ftp.infomaniak.com'
const port = 21
const localFilesGlob = ['./dist/**/*']
const remoteFolder = '/fr'

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {
  return ftp.create({
    host,
    port,
    user,
    password,
    parallel: 5,
    log: gutil.log
  })
}

/**
 * Deploy task.
 * Copies the new files to the server
 */
gulp.task('deploy', function() {
  const conn = getFtpConnection()

  return gulp
    .src(localFilesGlob, { base: './dist', buffer: false })
    .pipe(conn.newer(remoteFolder)) // only upload newer files
    .pipe(conn.dest(remoteFolder))
})
