row=0
while row<=4:
    col=0
    while col<=2:
        if (row>=0 and col==0) or (row==0 and col>0) or (row==2 and col>0) or (row==1 and col>1):
            print("*",end="")
        else:
            print(" ",end="")
        col=col+1
    print()
    row=row+1