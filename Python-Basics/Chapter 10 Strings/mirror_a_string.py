# Given a string and a number N, we need to mirror the characters
# from the N-th postion upto the length of the string in alphabetical order.
# In mirror operation, we change 'a' to 'z' , 'b' to 'y' and so on.

order1="abcdefghijklmnopqrstuvwxyz"
order2=order1[::-1]
dict=dict(zip(order1,order2))
string=input("Enter a string:")
temp=""
N=int(input("Enter N:"))
for i in string[N-1:]:
    temp+=dict[i]
    
print(string[0:N-1]+temp)

