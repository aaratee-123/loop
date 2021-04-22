
guess_num=int(input("enter the number"))
i=1
while i<=10:
    num=1
    while num<=i:
        target_num=int(input("enter the number between 1 to 10"))
        if target_num==guess_num:
            print("successfull guess")
        else:
            print("appear again")
        if i==1:
            break
        num=num+1
    i=i+1
    
