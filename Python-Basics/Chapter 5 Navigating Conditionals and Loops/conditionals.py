# raining=False
# if raining==True :
#     print("take umbrella")
# else :
#     print("No need to carry umbrella")

# x=int(input("Enter the number: "))
# if x>0 :
#     print(x," is positive")
# elif x<0 :
#     print(x, " is negative")
# else :
#     print("It is 0")

# x=int(input("Enter a non-negative number: "))
# if x%2==0 :
#     print(x," is even")
# else:
#     print(x," is odd")

# CP=int(input("Enter the cost price:"))
# SP=int(input("Enter the selling price:"))
# if CP>SP:
#     print("The Loss incurred is:",CP-SP)
# elif CP<SP:
#     print("The profit gained is:",SP-CP)
# else:
#     print("No profit No Loss")

# percentage=float(input("Enter the percentage obtained by student:"))
# if percentage>=81 and percentage<=100:
#     print("Very Good")
# elif percentage>=61:
#     print("Good")
# elif percentage>=41:
#     print("Average")
# else:
#     print("Fail")

# eng_marks=int(input("Enter marks in English: "))
# math_marks=int(input("Enter marks in Mathematics:"))
# if eng_marks>80 and math_marks>80:
#     print("A")
# elif eng_marks>80 or math_marks>80:
#     print("B")
# else:
#     print("C")

# number=int(input("Enter a number:"))
# if len(str(number))==4:
#     print("Yes, it is a 4-digit number")
# else:
#     print("No, it is not a 4-digit number")

# a=int(input("Enter first number:"))
# b=int(input("Enter second number:"))
# c=int(input("Enter third number:"))
# # Fun fact: Neither of them are equal 
# #print(max(a,b,c))
# if a>b and a>c:
#     print(a,"is greatest")
# elif b>a and b>c:
#     print(b,"is greatest")
# else:
#     print(c,"is greatest")

# a=int(input("Enter first number:"))
# b=int(input("Enter second number:"))
# c=int(input("Enter third number:"))
# if a>b:
#     if a>c:
#         print(a,"is greatest")
#     else:
#         print(c,"is greatest")
# else:
#     if b>c:
#         print(b,"is greatest")
#     else:
#         print(c,"is greatest")

x=int(input("Enter a number:"))
#take positive integer input and tell if it is divisble by 5 or 3 but not 15
if x%3==0:
    if x%5==0:
        print("No")
    else:
        print("Yes")
else:
    if x%5==0:
        print("Yes")
    else:
        print("No")