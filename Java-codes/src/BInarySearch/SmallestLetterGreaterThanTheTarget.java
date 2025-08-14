package BInarySearch;

public class SmallestLetterGreaterThanTheTarget {
    public static void main(String[] args) {
        //smallest character in the array greater than the target


    }

    public static char nextGreatestLetter(char[] letters, char target) {
        int start=0,end=letters.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(target<letters[mid]){
                end=mid-1;
            }else{
                start=mid+1;
            }
        }
        return letters[start%letters.length];
    }
}
