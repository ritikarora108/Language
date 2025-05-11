# remove the white spaces , covert into lowercase then check palindrome
# str="  A man A plan a canal Panama "
# print(str)
# str=str.replace(' ','')
# print(str)
# str=str.lower()
# print(str)
# reversed_str=str[::-1]  # str[-1::-1]
# print(reversed_str)
# print(str==reversed_str)

# print all words that are of even length in string
str="we love to code in the python and C++ language"
lst=str.split()
print(lst)
for i in lst:
    if len(i)%2==0:
        print(i,end=" ")
