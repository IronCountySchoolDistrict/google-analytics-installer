# README #

Google Analytics Installer is a PowerSchool customization that makes it easy to use Google Analytics with PowerSchool.

### How do I set this up? ###
This plugin requires an insertion point be added to the login pages of each portal (admin, teachers, and public). The login page for each portal is:

admin: /admin/pw.html

teachers: /teachers/pw.html

public: /public/home.html

The code that should be added to each page is:

<div id="cust-pw-footer">~[cust.insertion_point:pw.footer]</div>

This HTML code should be inserted somewhere within the <body> tag of the HTML structure (DOM) of the page.

### Who do I talk to? ###
* data@ironmail.org
* Please feel free to ask questions or make suggestions on this page, or make a thread on the Customizations forum here on PowerSource.

Many thanks!