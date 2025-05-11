# container for storing multiple values in a variable
# unordered
# immutable
# unindexed
# duplicates not allowed
# any datatype
# mix of different datatypes


# creating a set
# names={"Sia","Mia","Tia"}
# print(names)
# print(len(names))
# print(type(names))


# #Access items of set
# for i in names:
#     print(i)
    
# # Check if an item exists in a set or not
# print("Pia" in names)

names={"Sia","Mia","Tia"}
# #add elements in set

# names.add("Pia")
# print(names)
# names.add("Sia")
# print(names)

#add another sequence in a set
# list=["Cia","Kia"]
# names.update(list)
# print(names)

# removing elements from set
# names.remove("Tia")
# print(names)

# #names.remove("Kia")  ##can't use remove(value) function if value is not present in set 
# names.discard("Ria")   # it won't throw error if value is not present in set
# print(names)

# joining 2 sets
# s1={'a','b','c'}
# s2={'d','e','a'}
# s3=s1.union(s2)
# print(s3)

# # to add s2 in s1
# s1.update(s2)
# print(s1)


# keep only duplicates while joining (intersection)
# s1={'a','c','b'}
# s2={'c','e','a'}
# s1.intersection_update(s2)
# print(s1)

# keep all values except duplicates
s1={'a','c','b'}
s2={'c','e','a'}
s1.symmetric_difference_update(s2)
print(s1)