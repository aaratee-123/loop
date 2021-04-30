name=input("enter the name")
i=0
while i<len(name):
    print(name.upper()[i]+name.lower()[i],end="")
    if i!=len(name)-1:
        print("__",end="")
    i=i+1