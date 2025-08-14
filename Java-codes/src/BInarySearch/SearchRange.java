package BInarySearch;

public class SearchRange {
    public static void main(String[] args) {

    }

    public int[] searchRange(int[] nums, int target) {
        int[] ans={-1,-1};
        ans[0]=leftSide(nums,target);
        ans[1]=rightSide(nums,target);
        return ans;
    }

    private int leftSide(int[] arr,int target) {
        //search in the left half
        int ans=-1,start=0,end=arr.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(arr[mid]==target){
                ans=mid;
                end=mid-1;
            }else if(target>arr[mid]){
                start=mid+1;
            }else{
                end=mid-1;
            }
        }
        return ans;
    }

    private int rightSide(int[] arr,int target) {
        //search in the right half
        int ans=-1, start=0,end=arr.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(arr[mid]==target){
                ans=mid;
                start=mid+1;
            }else if(target>arr[mid]){
                start=mid+1;
            }else{
                end=mid-1;
            }
        }
        return ans;
    }


}
