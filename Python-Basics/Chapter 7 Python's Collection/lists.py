# Lists: it allows us to store multiple items in a single container
# fruits=["apple","banana","kiwi","mango"]
# Indexed : print(fruits[2])
# Ordered : remains in same sequence
# Mutable : fruits[1]="cherry"
# Duplicates allowed  : l=["bat","bowl","cat","bat"]
# Any datatype      : list1=[1,2,3] , list2=["a","b","c"] , list2=[1.2,2.3,3.4]
# Mix of different datatypes      : l1=[1,"2",3.4]

'''
fruits=["apple","banana","kiwi","mango"]  # creating a list
print(fruits)         # print a list
print(type(fruits))    # check type of list
print(len(fruits))    # length of list (number of items)

#Check whether an item is present or not in list   : in, not in
print("cherry" in fruits)
if "watermelon" not in fruits:
    print("Watermelon is not present in the list fruits")

#indexing in list
print(fruits[1])            # fruits[i] is equal to fruits[i-n] , where 0<=i<n
print(fruits[-3])
print(fruits[1:3])
print(fruits[-3:-1])
'''

#adding elements in list
# append,insert,extend

# l1=[10,20,30,40]
# print(l1)
# l1.append(50)
# print(l1)
# l1.insert(2,60)
# print(l1)

# l2=[100,200,300]
# l1.extend(l2)
# print(l1)

#remove elements from list
# remove,pop

#l=[10,20,30,40,50,60]
# print(l)
#l.remove(20)   # l.remove(value)  , if value is not present, it will throw error
#print(l)

# l.pop(2)   # l.pop(index)
# print(l)

# l.pop()   # if index is not passed, last element is removed
# print(l)


# Changing items in a list
# list=[10,20,30,40,50]
# print(list)
# list[3]=100
# print(list)

# list[1:4]=[1000,1,1]
# print(list)

# list[0:4]=[9]
# print(list)

# fruits=["apple","banana","kiwi","cherry"]
# print(fruits)
# fruits[1:3]="papaya"
# print(fruits)


# Sorting a list
# fruits=["banana","kiwi","mango","cherry","apple"]
# print(fruits)
# fruits.sort()   # by default , sort in ascending order
# print(fruits)

# fruits.sort(reverse=True) # descending order
# print(fruits)

# list=[10,445,34,22]
# print(list)
# list.reverse()
# print(list)

# List Comprehension:

# list=[10,34,20,45,90]
# new_list=[i for i in list if i>25]
# print(new_list)

# fruits=["apple","banana","cherry","kiwi","mango"]
# special_fruits=[fruit for fruit in fruits if "a" in fruit]
# print(special_fruits)

# Copy a list
# list=[10,20,30,4,5]
# new_list=list.copy()
# print(new_list)

#Concatenation:
# fruits=["apple","kiwi"]
# more_fruits=["banana","mango"]
# print(fruits)
# print(more_fruits)
# fruits+=more_fruits
# print(fruits)
# print(more_fruits)

# Nested lists:
# list=[10,20,[10,40],50]
# print(list)
# print(len(list))
# print(list[2])
# print(len(list[2]))
# print(list[2][1])

fruits=["apple","mango","kiwi"]
print(fruits)
fruits.insert(2,["cherry","papaya"])
print(fruits)