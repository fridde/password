# Password builder

With this password builder you can create and recreate passwords in a deterministic manner using a secret salt and secret master password.

## Installation and setup
1. Clone or download this repo onto your local machine.
1. Copy the file ```salt_example.js``` and call the new file ```salt.js```.
1. Open the file ```salt.js``` and edit the salt to some random, long string.
1. Run ````builder``` in your console, probably by using ```sh builder```.
1. Place the newly build file ````password.html``` anywhere you need to access your passwords:
  - mobile phone
  - desktop
  - dropbox, etc
  
## Usage
- Make up a long and secure master password that you can remember.
- Whenever you are prompted to "invent" a password, go first to ```password.html``` in your browser and enter a domain name for the current account, for example "Amazon" or "Yahoo". The domain is case-insensitive, so using "amazon" or "Amazon" makes no difference. 
- Enter the username you will be using. 
- Enter the master password. 
- Now copy only the domain and the username into some document that is easily available to you.
- Use the calculated password for this domain.
- Whenever you need to reenter the password, recreate it by checking your list, and reenter the same data.

## How to solve regular password change
At some companies you need to change your password frequently. For this, use different domain names for each password.
- MyCompany_Jan2017
- MyCompany_Q3_17
- etc

## What about this PIN code?
Sometimes what you need is not a alphanumeric password, but a PIN code. The code given is a numerical hash of the password.