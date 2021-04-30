num=int(input("enter the number"))
temp=num
pali=0
i=1
while i<=num:
    a=num%10
    pali=pali*10+a
    num=num//10
if temp==pali:
    print("it is palindrome number",pali)
else:
    print("it is not palindrome number",pali)
    i=i+1
    
# a=121%10

# print(a)