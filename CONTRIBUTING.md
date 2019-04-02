# Contributing to Chatversity's Static Site

## Installation

1. Clone this repository.
2. Run `npm install` in the root directory.
3. Run `node server.js` in the root directory.
4. Open a new terminal and run `ng s --open` in the root directory.

## Branching Strategy

1. Pull from Master ```git pull```
2. Create a Feature Branch off of Master ```git checkout -b Feature/FeatureName```  
*Example:* ```git checkout -b Feature/Navbar```
3. *Change the code at this stage.*
4. Add and commit the changes   
```git add *```  
```git commit -m "Commit Message"```
5. Push the changes to GitHub ```git push -u origin Feature/Navbar```
6. Go to GitHub.
    1. Navigate to your Branch.
    2. Click Create New Pull Request.
    3. Submit the Pull Request.
    4. Wait for Approval.
    5. Merge the Pull Request into Master.
    6. Delete your Branch on GitHub.
7. Checkout to Master ```git checkout master```
8. Delete your Branch locally ```git branch -d Feature/Navbar```
9. Pull the latest changes to your machine ```git pull```