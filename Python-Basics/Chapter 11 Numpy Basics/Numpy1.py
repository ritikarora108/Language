import numpy as np
myarr= np.array([3,2,4,7],np.int32)
print(myarr[0])  # 3
print(myarr.shape)
myarr=np.array([[2,5,2,1]],np.int64)
print(myarr.shape) #  1,4
print(myarr.dtype) # 64
myarr[0,1]=44
print(myarr)

listarr=np.array([[1,2,3],[5,8,5],[0,3,1]])
print(listarr)
print(listarr.dtype)
print(listarr.shape)
print(listarr.size)


# Non-efficient way of creation of array using objects
setArr=np.array({3,4,2,3,3,1,1})
print(setArr)
print(setArr.dtype)
print(setArr.size)
print(setArr.shape)