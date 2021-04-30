name=input("enter the name in capital letter")
i=0
while i<len(name):
    print(name.swapcase()[i]+name.swapcase()[i],end="")
    if i!=len(name):
        print("_",end="")
    i=i+1
    