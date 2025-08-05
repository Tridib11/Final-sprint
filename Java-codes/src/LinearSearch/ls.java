package LinearSearch;

public class ls {
    public static void main(String[] args) {
        int[] arr={2,3,4,5,3};
        System.out.println(linearSearch(arr,3));
    }

//    private static int linearSearch(int[] arr,int n){
//        for (int i=0;i<arr.length;i++){
//            if(arr[i]==n){
//                return i;
//            }
//        }
//        return -1;
//    }
    public static int linearSearch(int nums[], int target) {
		//Your code goes here
        for(int i:nums){
            if(i==target){
                return i;
            }
        }
        return -1;
    }
}
