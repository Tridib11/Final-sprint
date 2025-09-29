package Arrays;

public class Rotate {
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5};
        rotate(arr);

    }
    public static void rotate(int[] nums) {
        // code here
        int temp=nums[nums.length-1]; //5
        for(int i=0;i<nums.length;i++){
            nums[i+1]=nums[i];
        }
        nums[0]=temp;
    }
}
