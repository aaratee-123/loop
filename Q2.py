i=1
while i<=5:
    j=1
    while j<=5-i:
        print("_",end="")
        j=j+1
    b=1
    while b<=i:
        print(chr(96+j)+""*(j+1),end="")
        b=b+1
    print()
    i=i+1