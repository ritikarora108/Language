# String is a sequence of characters
# Immutable
# str1='abc'    # Single quote
# str2="def"    # Double quote 
# str3='''ghi''' # Triple Quote
# print(str1,str2,str3)
# print(type(str1),type(str2),type(str3))

# paragraph='''This is a multiline string.
# You can make it using triple quotes.'''
# print(paragraph)

# # Array like indexing in strings
# text="HelloWorld"
# print(text[2])
# print(text[-3])

#Traversing a string
# name="Ritik"
# # using forLoop
# for i in name:
#     print(i,end=" ")
    
# # using list comprehension
# print()
# list=[char for char in name]
# for i in list:
#     print(i,end=" ")
    
# # length of a string
# print()
# print(len(name))


# course="DSAfoundation"
# # find a char/substring in a string
# # print('e' in course)
# # print('found' in course)
# # print(course.find('A'))  # index of fisrt occurance
# # print(course.find('friend'))  # returns -1 if not present in string

# #Slicing a string: used to get a part of the string
# print(course[3:7])
# print(course[7:3:-1])

# str="helloWORLD"
# #for converting characters to upper case:
# print(str.upper())
# print(str)

# # for converting characters to lowercase:
# print(str.lower())
# print(str)

# # for capitalising the first character of my string
# str1="hey i am ritik"  # h->H
# print(str1.capitalize())

# # for stripping/removing any trailing whitespaces
# string="      hello     World        "
# print(string.strip())


#  string.replace(old_substring,new_substring,count)
# if count is not given all occurances of old_substring is replaced
# line="Hello world, this is Ritik ,  Hey I am Ritik,   Listen! My name is Ritik"
# print(line.replace("Ritik","Mark",2))
# print(line)


# Split:  string.split(sep,maxSplit)
#    sep-separator(" ",",","-")   maxSplit-number of times , we want to split
# used to split the strings into a list of substrings

# str="I am Ritik Arora"
# lst=str.split()
# print(lst)

# str1="Hey,My,Salary,is,2,lakhs"
# lst=str1.split(",")
# lst1=str1.split(",",3)
# print(lst)
# print(lst1)

# sentence="   hello    world    Python     it   is "
# experiment=sentence.split()
# print(experiment)


# Concatenation
# str1="Hello World!"
# str2="What a great place this is!"
# str1+=str2
# print(str1)

# format()-> string formatting
# used to insert variable values in a string
fruit1="mango"
fruit2="apple"
str="I have fruits - {f1} and {f2}".format(f1=fruit1,f2=fruit2)
print(str)

student_name="Ritik"
student_score="100"
print("Name of the student is {name} and he scored {marks} out of 100".format(name=student_name,marks=student_score))