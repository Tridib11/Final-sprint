package BInarySearch;

public class Ceil {
    public static void main(String[] args) {
        int[] arr={3,4,4,7,8,10};
        int ans=ceil(arr,arr.length,5);
        System.out.println(ans);
    }
    public static int ceil(int[] arr,int n,int x){
        int start=0,end=n-1;
        int ans=-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(arr[mid]>=x){
                ans=arr[mid];
                end=mid-1;
            }else{
                start=mid+1;
            }
        }
        return ans;
    }
}
