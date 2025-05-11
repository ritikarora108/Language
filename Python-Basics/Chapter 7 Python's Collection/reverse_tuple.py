# reversed()  helps in iterating thorugh a sequence in reverse order

colours=("red","green","blue","brown")
new_colours_list=[]
for i in reversed(colours):
    new_colours_list.append(i)
new_colours_tuple=tuple(new_colours_list)   # type cast in tuple
print(new_colours_tuple)