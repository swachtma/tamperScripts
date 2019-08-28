# User scripts for Cloudinary

Scripts in this repo are automatically pushed as updates to https://openuserjs.org as commits are pushed to the master branch. To see a full listing of published scripts visit https://openuserjs.org/users/swachtma.

## Usage

To use scripts you will need the [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) chrome extension installed. **After** installing TamperMonkey, each script can then be individually installed and activated from the links below.

## cloudinarySFDCCSM.user.js

This script changes the workflow of quickedit menus inside the SFDC accounts pane. All fields outside of the CS section are hidden, and frequently updated fields such as use-case and CSM comments are reordered to appear at the top of the edit window.

Install from: https://openuserjs.org/scripts/swachtma/CSM_Salesforce_Quick_Edits

### Script Specific Setup

This script work best when you've created an account view for all assigned accounts, with a view for critical/frequently updated fields.

1. To setup login to Salesforce and view the accounts tab.
2. In the Account listview dropdown, search for "Account with CSM Comments"
   [Find the Account With Comments Report](readme_images/accountWithComments.png)
3. Next, clone the report so you can make your own filtered view: Settings Cog > Clone Report
   [Clone the report to edit filters](readme_images/cloneReport.png)
4. Name the list view something you'll remember; "Account with CSM Comments - Your Name", then click save
5. In the right-hand filter menu, add a filter criteria: CSM == Your Name
   [Filter to only your accounts](readme_images/csmFilter.png)
6. Click save after adding your new filter
7. Click the Setting Cog > Select Fields to Display
8. Edit field list to only those you want easy access to. I chose: Account Name, Cloud Names, CSM Comments, and Use Case but you can include as many/few fields as you like.
9. Make sure the installed script is enabled by going to the TamperMonkey extension icon > CSM Salesforce Quick Edits (toggle to green)
   [Check that the user script is enabled](readme_images/tamperEnabled.png)
10. Reload your new account listview and edit an account (Dropdown arrow on the right > Edit)

You should now see the updated editting interface.
[Updated CSM Edit Window](readme_images/updatedView.png)
