# tuples: used to store multiple items in a container
# Iteration one by one/  Traversal in tuples is faster than the list
#colours=("blue","green","black")

# ordered
# immutable
# duplicates allowed
# any data type
# mix of different data types

# creating a tuple
# colours=("black","green","white")
# print(colours)
# print(type(colours))
# print(len(colours))

# colours=tuple(("black","brown","red"))
# print(colours)
# print(type(colours))
# print(len(colours))

# # creating a tuple with 1 item
# colours=("black",)
# print(colours)
# print(type(colours))
# print(len(colours))

# colours=tuple(("black"))
# print(colours)
# print(type(colours))
# print(len(colours))

# colours=("black")
# print(colours)
# print(type(colours))
# print(len(colours))

# Accessing items in a tuple
# colours=("blue","white","black","green","yellow")
# print(colours[1])  # positive indexing
# print(colours[-2]) # negative indexing
# print(colours[:3])       # range indexing
# print(colours[-4:])   # negative range indexing

# # check if an item exits in tuple
# print("green" in colours)

# colours=("blue","white","black","green","yellow")
# for i in colours:   # traverse the tuple
#     print(i)
    
# # concatenate two tuples

# more_colours=("pink","red")
# colours+=more_colours
# print(colours)


# Unpacking a tuple

colours=["red","green",'black','yellow']
c1,c2,c3,c4=colours
print(c1,c2,c3,c4)

print((1,2)+(3,4))