package BInarySearch;

public class CeilingOfANumber {
    public static void main(String[] args) {
        //Smallest element in the array geater or =  target
        int[] arr={2,3,5,9,14,16,18};
        int target=15;
        System.out.println(Ceiling(arr,target));

    }

    private static int Ceiling(int[] arr,int target){
        int start=0,end=arr.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(arr[mid]==target){
                return mid;
            }else if(target>arr[mid]){
                start=mid+1;
            }else if(target<arr[mid]){
                end=mid-1;
            }
        }
        return start;
    }
}
