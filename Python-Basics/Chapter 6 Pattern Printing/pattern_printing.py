# n=int(input("Enter the number of rows:"))
# for i in range(n):
#     for _ in range(5):
#         print("*",end="")
#     print("")

# n=int(input("Enter n:"))
# for _ in range(n):
#     print("*"*5)

# n=int(input("Enter n:"))
# for _ in range(n):
#     for j in range(1,n+1):
#         print(j,end="")
#     print("")

# n=int(input("Enter n:"))
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(j,end="")
#     print()

# n=int(input("Enter n:"))
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(chr(ord('A')+j-1),end="")
#     print()

n=int(input("Enter n:"))
for i in range(1,n+1):
    print(" "*(n-i),end="")
    for j in range(1,2*i,1):
        print(j,end="")
    print()