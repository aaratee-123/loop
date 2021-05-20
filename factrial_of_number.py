#4)write a program factorial of any number
i=int(input("enter the number"))
fact=1
while i>0:
    fact=fact*i
    i=i-1
print("factorial",fact)