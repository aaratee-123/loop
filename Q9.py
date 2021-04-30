# name=input("enter the name")
# i=1
# while i<len(name-):
#     print((name.title()[i]+name.title()[i]),end="")
#     if i!=len(name):
#         print("__",end="")
#     i=i+1

row=1
while row<=4:
    col=1
    while col<=7:
        if row-col==0 or row+col==8:
            print("*",end="")
        else:
            print(" ",end="")
        col=col+1
    print()
    row=row+1