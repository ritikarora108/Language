# ordered
# changeable
# unindexed
# duplicates not allowed (for keys)
# any datatype

phones={
    "John":83748948,
    "Riya":23445345,
    "Joy":25463453,
    "Rahul":3535235
}
#printing the dictionary
# print(phones)
# print(type(phones))
# print(len(phones))

# #access items of a dictionary
# print(phones["John"])
# print(phones.get("Riya"))

# print(phones.keys())
# print(phones.values())

# #update value in dict
# print(phones)
# phones["John"]=1453623
# print(phones)

# # add elements in dict
# phones["Kia"]=3436353
# print(phones)

# more_phones={
#     "Tia":255235,
#     "Rahul":25363
# }

# phones.update(more_phones)
# print(phones)

#remove elements in dict
# print(phones)
# phones.pop("Riya")
# phones.pop("Ritik")  # this will throw error as "Ritik" is not present
# print(phones)
# phones.popitem()   # removes the last entry added in dict
# print(phones)

# phones.clear()  # empty the dictionary
# print(phones)

# for x in phones:                     for x,y in phones.items():
#     print(x,phones[x])                   print(x,y)

# for x in phones.items():
#     print(x)

# nested dictionary
phones={
    "Area1":{
        "x":4353,
        "y":55356,
        "z":353
    },
    "Area2":{
        "a":2353,
        "b":235,
        "c":345
    }
}
print(phones)
print(phones["Area1"]["y"])
