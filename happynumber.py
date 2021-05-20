
#program- Happy number
num=int(input("enter then number"))
c=num
while num>=1:
    a=num//10
    b=num%10
    c=a**2+b**2
    num=num//10
if c==1:
    print("it is Happy number")
else:
    print("it is unhappy number")