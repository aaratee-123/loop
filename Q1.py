i=1
while i<=5:
    b=1
    while b<=5-i:
        print(" ",end= "")
        b=b+1
    j=5
    while j==5:
        print(chr(64+i)*5+""*(i+1))
        j=j+1
    print()
    i=i+1