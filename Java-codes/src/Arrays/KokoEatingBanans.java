package Arrays;

public class KokoEatingBanans {
    public static void main(String[] args) {

    }

    public static int minimumRateToEatBananas(int[] nums, int h){
        int start=0, end=0;
        for(int i:nums){
            end=Math.max(end,i);
        }
        while(start<=end){
            int mid=start+(end-start)/2;
            long totalHours=calculateHours(nums,mid);
            if(totalHours<=h){
                end=mid-1;
            }else{
                start=mid+1;
            }
        }

        return start;
    }

    public static long calculateHours(int[] nums,int hourly){
        long totalHours=0;
        for (int num : nums) {
            totalHours += Math.ceil((double) num / (double) hourly);
        }
        return totalHours;
    }

}
