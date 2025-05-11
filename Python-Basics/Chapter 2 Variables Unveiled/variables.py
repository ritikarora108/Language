#string
name="Isha"
#integer
roll_number=17
#floating number
percentage=95.8
#boolean
is_student=True

print("Details: ")
print(name,roll_number,percentage,is_student)
print(type(name),type(roll_number),type(percentage),type(is_student))
percentage=94
print(percentage)

print("My name is "+name+ " and my roll number is",roll_number)
print("I scored",percentage ,"% in my final exams. I am a student: ",is_student)

#print expressions
print("My percentage has changed to",percentage-1.5)

#printing with seperator
print(name,roll_number,percentage,is_student,sep="-")
x=1
y=2
z=3
print(x,y,z,sep="->")
