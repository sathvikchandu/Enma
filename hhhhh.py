def solve(nums):
    max=0
    length=len(nums)
    for i in range(0,length-1):
        count=1
        for j in range(i+1,length):
            if(nums[i]==nums[j]):
                count+=1
                if(max<count):
                    max=count
    return max

arr = [1,2,4,3,3,2]
print(solve(arr))

