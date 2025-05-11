import numpy as np
zeros=np.zeros((2,5))  # 2D array of 0's
print(zeros)
print(zeros.dtype)
print(zeros.shape)
print(zeros.size)

rng=np.arange(15)  #  Range of elements from 0-14 inclusive
print(rng)

lspace = np.linspace(1,50,10) # Equally spaced elements
print(lspace) 

emp=np.empty((4,6))  # Random elements
print(emp)

emp_like=np.empty_like(lspace)
print(emp_like)

ide = np.identity(4)
print(ide)
print(ide.shape)

arr=np.arange(20)
print(arr)
newArr=arr.reshape((4,5))
print(newArr)

newArr=newArr.ravel()
print(newArr)
print(newArr.shape)

x=[[1,2,3],[4,5,6],[7,1,0]]
print(x)
ar=np.array(x)
print(ar)
sumArr0=ar.sum(axis=0)
print(sumArr0)
print(sumArr0.shape)
sumArr1=ar.sum(axis=1)
print(sumArr1)
print(sumArr1.shape)

ar=ar.transpose()  # ar=ar.T
print(ar)
for item in ar.flat:
    print(item,end=" ")
print()

print(ar.ndim) # Number of dimensions
print(ar.size)
print(ar.nbytes) # Total bytes consumed

one=np.array([10,4,6,77,31])
print("Index corresponding to maximum element:",one.argmax())
print("Index corresponding to minimum element:",one.argmin())

print("Maximum Element: ",one[one.argmax()])
print("Minimum Element: ",one[one.argmin()])

IndexSortArray=one.argsort()
print(IndexSortArray)
for i in IndexSortArray:
    print(one[i],end=" ")
print()


#Lets use the already made array: ar
print(ar)
ar=ar.T
print(ar)
print(ar.argmin())
print(ar.argmax(axis=0))
print(ar.argmin(axis=1))

print(ar.argsort())  # default:  axis=1
print(ar.argsort(axis=1))
print(ar.argsort(axis=0))
ar=ar.ravel()
print(ar)
ar=ar.reshape(9,1)
print(ar)
ar=ar.reshape(9,)
print(ar)