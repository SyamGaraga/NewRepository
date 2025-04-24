# def min_max_sum(list1):
#     min1=min(list1)
#     max1=max(list1)
#     sum=min1+max1
#     return sum
# print(min_max_sum([1,3,2,-1,4]))

# def find(list1):
#     num=int(input())
#     for i in list1:
#         if i==num:
#             return True
#     return False
# print(find([1,2,3,4]))


# def find(list1):
#     num=int(input())
#     for i in list1:
#         if i==num:
#             return list1[i-2]
#     return False
# print(find([1,2,3,4,7,9,8]))

# def find_max(list1):
#     max=float('-inf')
#     for i in list1:
#         max=i if i > max else max
#     return max
# list=[[1,-5,92],[1,2,3],[4,5,6]]
# res=[]
# for j in list:
#     res.append(find_max(j))
# print(res)

#linear search
# def linear_search(list1):
#     search_num=int(input())
#     for i in range(len(list1)):
#         if list1[i]==search_num:
#             return True
#     return False
# print(linear_search([1,2,3,4,5]))



# #binary search 
# def binary_search(list,search_num):
#     low=0
#     high=len(list)-1
#     while low<=high:
#         mid=int((low+high)/2)
#         if list[mid]==search_num:
#             return mid
#         elif list[mid]>search_num:
#             high=mid-1
#         else:
#             low=mid+1
#     return "not found"
# print(binary_search([1,2,10,32,75,89,100],100))


#bubble sort

list1=[45,23,47,89,2,-4,11]
for j in range(len(list1)-1):
    for i in range(0,len(list1)-1):
        if (list1[i] > list1[i+1]):
            list1[i],list1[i+1]=list1[i+1],list1[i]
    print(list1)


