def outer_function():
    x=1
    def inner_function():
        y=2
        result=x+y
        return result
    
    return inner_function()

print(outer_function())