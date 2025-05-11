import numpy as np
arr1=[[1,2,3],[4,5,6],[7,1,0]]
arr1=np.array(arr1)
print(arr1)

arr2=[[1,2,1],[4,0,6],[8,1,0]]
arr2=np.array(arr2)
print(arr2)
# Numpy allows matrix operations
print(arr1+arr2)
print(arr1*arr2)   # Not a matrix multiplication: it just gives finalArr[i,j]=arr1[i,j]*arr2[i,j]

print(np.sqrt(arr1))
print(arr1.sum())
print(arr1.max())
print(arr1.min())


x=np.where(arr1>5)
print(x)
print(type(x))

print(np.count_nonzero(arr1))
print(np.nonzero(arr1))

arr1[1,2]=0
print(np.count_nonzero(arr1))
print(np.nonzero(arr1))


import sys
py_arr=[0,4,55,2]
np_arr=np.array(py_arr)
print(sys.getsizeof(1)*len(py_arr))
print(np_arr.itemsize*np_arr.size)

print(np_arr.tolist())