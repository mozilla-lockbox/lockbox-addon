/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

var EXPORTED_SYMBOLS = ["AboutLogins"];

const {Services} = ChromeUtils.import("resource://gre/modules/Services.jsm");

const addonID = "lockbox@mozilla.com";
const addonPageRelativeURL = "/list/manage.html";

function AboutLogins() {
  this.chromeURL = WebExtensionPolicy.getByID(addonID).getURL(addonPageRelativeURL);
}
AboutLogins.prototype = {
  QueryInterface: ChromeUtils.generateQI([Ci.nsIAboutModule]),
  getURIFlags() {
    return Ci.nsIAboutModule.ALLOW_SCRIPT |
           Ci.nsIAboutModule.URI_MUST_LOAD_IN_EXTENSION_PROCESS;
  },

  newChannel(aURI, aLoadInfo) {
    const uri = Services.io.newURI(this.chromeURL);
    const channel = Services.io.newChannelFromURIWithLoadInfo(uri, aLoadInfo);
    channel.originalURI = aURI;

    channel.owner = Services.scriptSecurityManager.createCodebasePrincipal(uri, aLoadInfo.originAttributes);
    return channel;
  },
};
