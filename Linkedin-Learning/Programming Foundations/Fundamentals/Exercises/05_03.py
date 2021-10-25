def wash_car(wash_budget):
  if (wash_budget >= 12):
    print("Wash with tri-color foam")
    print("Rinse twice")
    print("Dry with large blow dryer")
  if ((wash_budget <= 12) and (wash_budget >= 8)):
    print("Wash with white foam")
    print("Rinse once")
    print("Air dry")
  if(wash_budget < 8):
    print("sorry, but you can not afford to wash your car!")

budget = int(input("What is your budget for a car wash? \n"))
wash_car(budget)