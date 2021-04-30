row=0
while row<=6:
    col=0
    while col<=4:
        if (row==0 and (col>0 and col<4)) or (row==3 and (col>0 and col<4)) or (col==0 and row>0) or (col==4 and row>0):
            print("*",end="")
        else:
            print(" ",end="")
        col=col+1
    print()
    row=row+1

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