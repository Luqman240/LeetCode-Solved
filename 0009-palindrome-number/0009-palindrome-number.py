class Solution:
    def isPalindrome(self, x: int) -> bool:
        if(x<0):
            return False
        
        xString1 = str(x)
        xString2 = ''
        if(len(xString1) == 1):
            return True

        for i in range(1,len(xString1)+1):
            xString2 += xString1[-i]
        
        if(xString1 == xString2):
            return True
        else:
            return False