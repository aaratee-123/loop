i=1
sum=0
num=int(input("enter the number"))
temp=num
while i<=num:
        a=(num%10)
        sum=sum+a**3
        num=num//10
print(sum)
if temp==sum:
    print("it is armstrong number") 
else:
    print("it is not armstrong number")
