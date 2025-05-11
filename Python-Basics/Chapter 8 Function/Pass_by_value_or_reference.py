#     Pass By Value:Immutable objects(strings,integers,float,tuples)
#     -> When passed to a function, a copy of the object is created 
#     and assigned to local variable in function
#     (Any change made to them in function doesn't corresponf the change in object 
#     outside function)

# def f(a,b):
#     a+=1
#     b+=1
#     print("Updated value in copy variable of a:",a)
#     print("Updated value in copy variable of b:",b)
#     return

# a=5
# b=10
# print("Original value of a is:",a)
# print("Original value of b is:",b)
# f(a,b)
# print("Value of a remains:",a)
# print("Value of b remains:",b)
    
    
# Pass by reference: (Mutable objects-> list,dictionary)
# -> Reference of actual object is passed into function
# -> Changes made inside the function will affect the original object

def modifyList(list):
    for i in range(0,len(list)):
        list[i]+=1

list=[10,20,30]
print(list)
modifyList(list)
print(list)


def modify(lst):
    lst=[2,3,4]     # here a new varibale lst is formed in the function scope
                    # hence lst parameter does not seem to change when passed by reference
    print("Inside function:",lst)
    return
lst=[10,20,30]
print("before function call:",lst)
modify(lst)
print("after function call:",lst)