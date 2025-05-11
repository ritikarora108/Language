# Iterative Approach
# def factorial(n):
#     ans=1
#     for i in range(1,n+1):
#         ans*=i    
#     return ans
# n=int(input("Enter n:"))
# print("Factorial of ",n,"is:",factorial(n))

#Recursive Approach
# def fact(n):
#     if n==0:
#         return 1
#     return n*fact(n-1)
# n=int(input("Enter n:"))
# print("Factorial of",n,"is:",fact(n))

#Program to print numbers from n to 1:
# def printSequence(n):
#     print(n)
#     if n==1:
#         return
#     printSequence(n-1)
    
# n=int(input("Enter n:"))
# print("Sequence:")
# printSequence(n)

#Program to print numbers from 1 to n:
# def printSequence(n):
#     if n==0:
#         return
#     printSequence(n-1)
#     print(n)
    
# n=int(input("Enter n:"))
# print("Sequence:")
# printSequence(n)

#Print sum from 1 to n
# n=int(input("Enter n:"))
# def sum1toN(n):
#     if n==1:
#         return 1
#     return n+sum1toN(n-1)
# print("Sum from 1 to",n,"is:",sum1toN(n))

#Function which calculates a raised to power b using recursion
# a=int(input("Enter a:"))
# b=int(input("Enter b:"))
# def aRaiseToPowerb(a,b):
#     if b==0:
#         return 1
#     return a*aRaiseToPowerb(a,b-1)
# print(a,"raise to power",b,"is:",aRaiseToPowerb(a,b))

#Make a function which calculates nth fibonacci using recursion
n=int(input("Enter n:"))
def nthFibonacci(n):
    if n==1 or n==2:
        return n-1
    return nthFibonacci(n-1)+nthFibonacci(n-2)

#print(nthFibonacci(n))

#Print fibonacci sequence :
for i in range(1,n+1):
    print(nthFibonacci(i),end=" ")