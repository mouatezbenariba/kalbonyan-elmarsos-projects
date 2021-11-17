def plant_recommendation(care):
    # equal sign is "==" not "="
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    # logic error it's medium instead of high
    elif care == 'high':
        print('orchid')


# correct the function name
# the following lines are tests
plant_recommendation('low')
plant_recommendation('medium')
plant_recommendation('high')