l=1
i=1
while i<=5:
    j=1
    while j<=5-i:
        print(" ",end="")
        j=j+1
    b=1
    while b<=l:
        print(chr(96+i),end=" ")
        b=b+1
    l=l+1
    print()
    i=i+1