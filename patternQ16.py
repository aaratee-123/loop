# write a program to print pattern:like
#     1
#    121
#   12321
#  1234321
# 123454321


l=1
i=1
while i<=6:
    b=1
    while b<=6-i:
        print(" ",end=" ")
        b=b+1
    j=1
    while j<i:
        print(j,end=" ")
        j=j+1
    k=j
    while k>=1:
        print(k,end=" ")
        k=k-1
    l=l+2
    print()
    i=i+1