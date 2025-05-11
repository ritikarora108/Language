'''
    Precedence:    
    1) Brackets ()
    2) Exponentiation **
    3) Division, Floor Division , Remainder : /,//,%
    4) Multiplication : *
    5) Addition, Subtraction: +,-
    6) Bitwise Shift : <<,>>
    7) &,|,^
    8) Comparison: !=,>,<,==
'''
print(3+2**4/2*5-8//2)

# type() function:  used to find the data type of variable
# Typecasting : converting one data type to another

x=int("2147483650")
print(x)
print(type(x))

a=2
b=3
c=5
d=int(str(a)+str(b)+str(c))
print(d)
print(type(d))


x=float(input("Enter temperature in deg C: "))
fahr=9/5*x+32
print("Temperature in Farenheit: ",fahr)