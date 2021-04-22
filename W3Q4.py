i=1
even=0
odd=0
while i<=9:
    if i%2==0:
        even=even+1 
    else:
        odd=odd+1
    i=i+1
print("number of even",even)
print("number of odd",odd)