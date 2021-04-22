# write a program to print:like
# 12345
# 1234
# 123
# 12
# 1

i=5
while i>=1:
    b=1
    while b<=5-i:
        print(" ",end= "")
        b=b+1
    j=1
    while j<=i:
        print(j,end= "")
        j=j+1
    print()
    i=i-1