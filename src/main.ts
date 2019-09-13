import * as core from '@actions/core';
import fs from 'fs';

async function run() {
  try {
      const files = core.getInput('files')
      const fileList = files.split(/,\s+/)
      var doesntExist: string[] = []
      fileList.forEach( function( file ) {          
          if ( ! fs.existsSync(file) ) {
              doesntExist.push( file )
          }
      })
      console.log("Missing files: " + doesntExist.join( ", " ) )
      if (doesntExist.length > 0 ) {
          core.setFailed( "These files do not exist: " + doesntExist.join( ", " ) )
      }

  } catch (error) {
      core.setFailed(error.message);
  }
}

run();
