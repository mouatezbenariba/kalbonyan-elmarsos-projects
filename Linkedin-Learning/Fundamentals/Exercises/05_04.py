# Function returns current balance after a withdraw
def withdraw_money(current_balance, amount):
  if (current_balance >= amount):
      current_balance = current_balance - amount
  return current_balance

# Calculating the balance using withdraw_money function
balance = withdraw_money(100, 80)

# Check if we need to make a deposit
if (balance <= 50):
  print("Your balance is:",balance,"you need to make a deposit")
else:
  print("Nothing to see here!")
