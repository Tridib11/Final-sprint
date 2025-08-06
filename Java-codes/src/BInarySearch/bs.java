package BInarySearch;

public class bs {
    public static void main(String[] args) {
        int[] arr={12,11,10,9,8,7,6,5,4,3,2,1};
        int target=8;
        if(arr[0]<arr[arr.length-1]){
            System.out.println(binarySearch(arr,target));
        }else{
            System.out.println(oabinarySearch(arr,target));
        }

    }

    static int binarySearch(int[] arr,int target){
        int start=0;
        int end=arr.length-1;
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

    static int oabinarySearch(int[] arr,int target){

        /**
         * 11/2=5
         *
         * 0  1  2  3 4 5 6 7 8 9 10 11
           12,11,10,9,8,7,6,5,4,3,2, 1 target=8
         */

        int start=0;
        int end=arr.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(target>arr[mid]){
                end=mid-1;
            }else if(target<arr[mid]){
                start=mid+1;
            }else{
                return mid;
            }
        }
        return -1;
    }
}
