# CypressTests

# Test 1 
#User should able to see added items in shopping cart
Test will add the Sony Vaio i7 to the shopping cart
Test will add the ASUS Full HD to the shopping cart
Verify that the contents of the shopping cart is correct

# Test 2
#User should able to purchase items from the website
Test will add the Sony Vaio i7 to the shopping cart
Test will add the ASUS Full HD to the shopping cart
Test will place the order and complete the transaction


# Added 2 commands
#Commands.js
#addItemsToCart - this command helps to add 2 items to the cart
#purchase - this command helps to purchase the items 

# How to start the test
1. Clone this repository 
2. Execute 'npm install' in your local folder to install all dependencies 
3. Execute 'node_modules\.bin\cypress open' to open cypress and cypress opens
4. Select spec file and double-click on it
5. The test will automatically start and execute the defined assertions and steps
6. At the end you can see the results of the executed tests

# Noticed Issues
1. Cart - order of the items is not same all the time
2. Thank you alert - Date is not showing correct only m is showing so month jan shows as 0