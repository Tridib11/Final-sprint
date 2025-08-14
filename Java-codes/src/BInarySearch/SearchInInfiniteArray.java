package BInarySearch;

public class SearchInInfiniteArray {
    public static void main(String[] args) {

    }

    private static int searchInfinite(int[] arr,int target){
        int start=0,end=1;
        while(target>arr[end]){
            int newStart=end+1;
            //end=previous end+size of the box * 2
            end=end+(end-start+1)*2;
            start=newStart;
        }
        return binarySearch(arr,start,end,target);
    }

    private static int binarySearch(int[] arr, int start, int end, int target) {
        while(start<=end){
            int mid=start+(end-start)/2;
            if(target<arr[mid]){
                end=mid-1;
            }else if(target>arr[mid]){
                start=mid+1;
            }else {
                return mid;
            }
        }
        return -1;
    }
}
