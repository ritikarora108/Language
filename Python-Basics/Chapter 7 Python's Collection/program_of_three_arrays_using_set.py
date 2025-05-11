# Given three arrays, we have to find common elements in three sorted lists using sets
list1=[1,5,5,10]
list2=[3,4,5,5,10]
list3=[5,5,10,20]
s1=set(list1)
s2=set(list2)
s3=set(list3)
s1.intersection_update(s2)
s1.intersection_update(s3)
final_list=list(s1)
print(final_list)