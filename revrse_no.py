i=1
rev=0
num=int(input("enter the number"))
while i<=num:
    a=num%10
    rev=rev*10+a
    num=num//10
print(rev)
