package Youtube;

public class MaxAndMin {
    public static void main(String[] args) {
        /**
         *
         *arr [ 1,2,3,4 ]
         *
         * for 1-4
         * max=-1313131313
         * Math.max(i,max)
         *
         * min=23232323232
         * Math.min(i,min)
         */


        int[] arr={3,1,5,4,7,19,8,20,-9};
        int max=Integer.MIN_VALUE;
        int min=Integer.MAX_VALUE;
        for(int i=0;i<arr.length;i++){
            max=Math.max(arr[i],max);
            min=Math.min(arr[i],min);
        }


        System.out.println("The max value is "+max+" and the min is "+min);
    }
}
