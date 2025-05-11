# Swap two elements in list , given their indices
# list=[23,65,19,90]
# idx1=0
# idx2=2
# print(list)
# xor=list[idx1]^list[idx2]
# list[idx1]=list[idx1]^xor
# list[idx2]=list[idx2]^xor
# print(list)

n=int(input("Enter the size of list: "))
list=[]
print("Enter the elements of list: ")
for _ in range(n):
    x=int(input())
    list.append(x)
    
print(list)
idx1=int(input("Enter idx1:"))
idx2=int(input("Enter idx2:"))

temp=list[idx1]
list[idx1]=list[idx2]
list[idx2]=temp

print(list)

