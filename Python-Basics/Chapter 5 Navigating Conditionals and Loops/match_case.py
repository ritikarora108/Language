n1=int(input("Enter first number:"))
n2=int(input("Enter second number:"))

operator=input("Enter the operator:")

match operator:
    case "+": print("Sum is:",n1+n2)
    case "-": print("Difference is:",n1-n2)
    case "*": print("Product is:",n1*n2)
    case "/": print("Quotient is:",n1//n2)
    case _: print("Enter a valid operator")
    
    