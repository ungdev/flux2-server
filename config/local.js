/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system: for example, this would be a good place
 * to store database or email passwords that apply only to you, and shouldn't
 * be shared with others in your organization.
 *
 * These settings take precedence over all other config files, including those
 * in the env/ subfolder.
 *
 * PLEASE NOTE:
 *		local.js is included in your .gitignore, so if you're using git
 *		as a version control solution for your Sails app, keep in mind that
 *		this file won't be committed to your repository!
 *
 *		Good news is, that means you can specify configuration for your local
 *		machine in this file without inadvertently committing personal information
 *		(like database passwords) to the repo.  Plus, this prevents other members
 *		of your team from commiting their local configuration changes on top of yours.
 *
 *    In a production environment, you probably want to leave this file out
 *    entirely and leave all your settings in env/production.js
 *
 *
 * For more information, check out:
 * http://sailsjs.org/#!/documentation/anatomy/myApp/config/local.js.html
 */

module.exports = {

    /***************************************************************************
     * The runtime "environment" of your Sails app is either typically         *
     * 'development' or 'production'.                                          *
     ***************************************************************************/
    environment: process.env.NODE_ENV || 'development',

    etuutt : {
        id:  process.env.ETU_UTT_ID,
        secret: process.env.ETU_UTT_SECRET,
    },

    /************************************************************************************
     * https://console.firebase.google.com/project/[YOUR-APP]/settings/cloudmessaging   *
     * copy the server key here                                                         *
     ************************************************************************************/
    serverKey: "your-key"

};
