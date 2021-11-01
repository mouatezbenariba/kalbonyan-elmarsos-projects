# input
first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize'

# capitalize the name
first_name_cap = first_name.capitalize()
last_name_cap = last_name.capitalize()
# find the position of a word in a string
award_location = note.find('award: ')
# slicing
award_text = note[7:]

# print the output
print(first_name_cap)
print(last_name_cap)
print(award_location)
print(award_text)