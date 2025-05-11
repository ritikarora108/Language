#  Functions: block of code used to perform a specific task

# n=int(input("Enter n:"))
# def f(n):
#     return n*(n+1)/2
# print("Sum of 1 to" ,n,"natural numbers:",int(f(n)))

# a=int(input("Enter a :"))
# b=int(input("Enter b:"))

# def sum(a,b):
#     return a+b
# print("Sum of",a,"and",b,"is: ",sum(a,b))

# A function that prints hello World
# def functionThatPrintsHelloWorld():
#     print("Hello World")
#     return
# functionThatPrintsHelloWorld()

#Default Arguments
# def sum(a,b,c=0):
#     return a+b+c
# # Positional Arguments
# print(sum(1,2))
# print(sum(10,20,30))

# def sum(n1,n2):
#     print(n1)
#     print(n2)
#     return n1+n2
# #Keyword Arguments
# print("Sum is:",sum(n2=3,n1=2))

#Arbitrary Arguments  : *args
def addAllNumbers(*args):
    #args -> Tuple
    sum=0
    for i in args:
        sum+=i
    return sum
print(addAllNumbers(1,2,3,4,5,6,7))

# KeyWorded Arguments/ Key Value Arguments : **kwargs

def studentInfo(**kwargs):
    #kwargs: taken as dictionary
    for x,y in kwargs.items():
        print(x,"is",y)
    return
studentInfo(names="Ritik",city="Delhi",age=19)
studentInfo(team="India",ranking=1,player_size=11)