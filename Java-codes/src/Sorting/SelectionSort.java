package Sorting;

import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int[] arr={2,1,4,3,5};
        selection(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void selection(int [] arr){
        for(int i=0;i<arr.length;i++){
            int last=arr.length-i-1;
            int maxIndex=maximumInTheArray(arr,0,last);

            swap(arr,maxIndex,last);
        }

    }

    private static void swap(int[] arr, int maxIndex, int last) {
        int temp=arr[last];
        arr[last]=arr[maxIndex];
        arr[maxIndex]=temp;
    }

    private static int maximumInTheArray(int[] arr, int start, int last) {
        int max=start;
        for(int i=start;i<=last;i++){
            if(arr[i]>arr[max]){
                max=i;
            }
        }
        return max;
    }
}
